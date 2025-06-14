import { algoliasearch } from 'algoliasearch'

const client = algoliasearch(
	import.meta.env.VITE_ALGOLIA_APP_ID!,
	import.meta.env.VITE_ALGOLIA_ADMIN_KEY!
)

export async function useAlgoliaImportData(data: any[]) {
	try {
		await client.saveObjects({
			indexName: 'evkalipt-projects',
			objects: data,
		})
		console.log('✅ Successfully indexed objects')
	} catch (err) {
		console.error('❌ Algolia bulk import error:', err)
		throw err
	}
}
