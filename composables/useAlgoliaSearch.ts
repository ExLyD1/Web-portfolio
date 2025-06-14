import { algoliasearch } from 'algoliasearch'
import type { IProject } from '~/widgets/model/projects'

export interface AlgoliaParams {
	query?: string
	difficulty: Array<'easy' | 'medium' | 'hard'>
	type: Array<'code' | 'demo' | 'video'>
	sortBy?:
		| 'date-new'
		| 'date-asc'
		| 'title'
		| 'difficulty-more'
		| 'difficulty-less'

	hitsPerPage?: number
	page?: number
}

export interface AlgoliaReturnings {
	items: IProject[]
	totalPages: number
	currentPage: number
	totalItems: number
}

const algolia = algoliasearch(
	import.meta.env.VITE_ALGOLIA_APP_ID,
	import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY
)

const INDEX_BASE = 'evkalipt-projects'

function getIndexName(sortBy?: AlgoliaParams['sortBy']) {
	switch (sortBy) {
		case 'date-new':
			return `${INDEX_BASE}_date_desc`
		case 'date-asc':
			return `${INDEX_BASE}_date_asc`
		case 'title':
			return `${INDEX_BASE}_title`
		case 'difficulty-more':
			return `${INDEX_BASE}_difficulty_more`
		case 'difficulty-less':
			return `${INDEX_BASE}_difficulty_less`
		default:
			return INDEX_BASE
	}
}

export async function useAlgoliaSearch(
	params: AlgoliaParams
): Promise<AlgoliaReturnings> {
	// Prepare filters
	const filters: string[] = []

	if (params.difficulty.length > 0) {
		const difficultyFilters = params.difficulty
			.map(d => `difficulty:${d}`)
			.join(' OR ')

		filters.push(`(${difficultyFilters})`)
	}

	if (params.type.length > 0) {
		const typeFilters = params.type.map(t => `type:${t}`).join(' OR ')
		filters.push(`(${typeFilters})`)
	}

	// Build query url
	const urlParams = new URLSearchParams()
	if (filters.length) urlParams.set('filters', filters.join(' AND '))
	urlParams.set('hitsPerPage', String(params.hitsPerPage ?? 3))
	urlParams.set('page', String(params.page ?? 0))

	// send request
	const indexName = getIndexName(params.sortBy)
	const { results }: any = await algolia.search({
		requests: [
			{
				indexName: INDEX_BASE,
				query: params.query,
				params: urlParams.toString(),
			},
		],
	})

	return {
		items: results[0].hits,
		totalPages: results[0].nbPages,
		currentPage: results[0].page,
		totalItems: results[0].nbHits,
	}
}
