import { defineStore } from 'pinia'
import type { IProject } from '~/widgets/model/projects'

export const useFilterStore = defineStore('filterStore', () => {
	const projects = ref<IProject[]>([])

	const filters = reactive({
		search: '',
		difficulty: [] as Array<'easy' | 'medium' | 'hard'>,
		contentType: [] as Array<'code' | 'demo' | 'video'>,
		sortBy: 'difficulty-more' as
			| 'date-new'
			| 'date-asc'
			| 'title'
			| 'difficulty-more'
			| 'difficulty-less',
	})

	const isLoading = ref<boolean>(true)
	const currentPage = ref<number>(0)
	const totalItems = ref<number>(0)
	const totalPages = ref<number>(1)
	const hitsPerPage = ref<number>(6)

	const maxLength = ref<number>(0)

	let loaderTimer = ref<ReturnType<typeof setTimeout> | null>(null)

	const clearAllFilters = () => {
		filters.search = ''
		filters.difficulty = []
		filters.contentType = []
		filters.sortBy = 'difficulty-more'
	}

	const loadProjects = async (page?: number) => {
		if (loaderTimer.value) clearTimeout(loaderTimer.value)
		loaderTimer.value = setTimeout(() => {
			isLoading.value = true
		}, 200)

		if (maxLength.value < projects.value.length) {
			maxLength.value = projects.value.length
		}

		if (page && page < maxLength.value / hitsPerPage.value) {
			page = maxLength.value / hitsPerPage.value
		}

		const params = {
			query: filters.search,
			difficulty: filters.difficulty,
			type: filters.contentType,
			sortBy: filters.sortBy,
			page: page ?? 0,
			hitsPerPage: page
				? hitsPerPage.value
				: maxLength.value > hitsPerPage.value
				? maxLength.value
				: hitsPerPage.value,
		}

		let response: AlgoliaReturnings

		try {
			response = await useAlgoliaSearch(params)

			if (page) {
				projects.value.push(...response.items)
			} else {
				projects.value = response.items
			}

			currentPage.value = response.currentPage
			totalItems.value = response.totalItems
			totalPages.value = response.totalPages
		} catch (err) {
			throw err
		} finally {
			if (loaderTimer) {
				clearTimeout(loaderTimer.value)
				loaderTimer.value = null
			}

			isLoading.value = false
		}
	}

	return {
		filters,
		clearAllFilters,
		isLoading,
		currentPage,
		totalItems,
		totalPages,
		loadProjects,
		projects,
	}
})
