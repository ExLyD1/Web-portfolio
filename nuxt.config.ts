// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxt/icon',
	],
	ui: {
		colorMode: false,
	},

	components: {
		dirs: [
			{
				path: '~/features',
				pathPrefix: false,
				global: true,
			},
			{
				path: '~/entities',
				pathPrefix: false,
				global: true,
			},
			{
				path: '~/widgets',
				pathPrefix: false,
				global: true,
			},
			{
				path: `~/components`,
				pathPrefix: false,
				global: true,
			},
		],
	},
})
