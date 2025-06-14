import { algoliasearch } from 'algoliasearch'

const algolia = algoliasearch(
	import.meta.env.VITE_ALGOLIA_APP_ID,
	import.meta.env.VITE_ALGOLIA_ADMIN_KEY
)

export async function useAlgoliaImportOne(data: any) {
	try {
		await algolia.saveObject({
			indexName: 'evkalipt-projects',
			body: data,
		})
		console.log('✅ Successfully indexed objects')
	} catch (err) {
		console.error('❌ Algolia bulk import error:', err)
		throw err
	}
}
