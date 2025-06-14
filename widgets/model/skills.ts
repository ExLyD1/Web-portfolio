export interface ISkill {
	category: string
	skills: {
		label: string
		knoweledge: number
	}[]
}

export const skills: ISkill[] = [
	{
		category: 'Frontend',
		skills: [
			{
				label: 'Vue 3',
				knoweledge: 70, // percentage for data bar
			},
			{
				label: 'Nuxt 3',
				knoweledge: 50, // percentage for data bar
			},
			{
				label: 'TypeScript',
				knoweledge: 50, // percentage for data bar
			},
			{
				label: 'Pinia',
				knoweledge: 95, // percentage for data bar
			},
			{
				label: 'Tailwind CSS',
				knoweledge: 70, // percentage for data bar
			},
			{
				label: 'Nuxt UI',
				knoweledge: 80, // percentage for data bar
			},
		],
	},
	{
		category: 'Backend ( basic )',
		skills: [
			{
				label: 'Prisma ORM',
				knoweledge: 50, // percentage for data bar
			},
			{
				label: 'PostgreSQL',
				knoweledge: 70, // percentage for data bar
			},
			{
				label: 'SQL',
				knoweledge: 70, // percentage for data bar
			},
			{
				label: 'MongoDB',
				knoweledge: 70, // percentage for data bar
			},
		],
	},
	{
		category: 'Tools',
		skills: [
			{
				label: 'Git',
				knoweledge: 50, // percentage for data bar
			},
			{
				label: 'WebSocket',
				knoweledge: 80,
			},
			{
				label: 'Chart.js',
				knoweledge: 50, // percentage for data bar
			},
			{
				label: 'Swiper.js',
				knoweledge: 100, // percentage for data bar
			},
			{
				label: 'Figma',
				knoweledge: 80, // percentage for data bar
			},
			{
				label: 'FSD',
				knoweledge: 80, // percentage for data bar
			},
		],
	},
	{
		category: 'API',
		skills: [
			{
				label: 'Postman',
				knoweledge: 100, // percentage for data bar
			},
			{
				label: 'Axios',
				knoweledge: 80, // percentage for data bar
			},
			{
				label: 'Strapi',
				knoweledge: 70, // percentage for data bar
			},
			{
				label: 'Directus',
				knoweledge: 60, // percentage for data bar
			},
		],
	},
	{
		category: 'Languages',
		skills: [
			{
				label: 'Ukranian Native',
				knoweledge: 100, // percentage for data bar
			},
			{
				label: 'English B2',
				knoweledge: 80, // percentage for data bar
			},
			{
				label: 'Spanish B1',
				knoweledge: 50, // percentage for data bar
			},
			{
				label: 'German A1',
				knoweledge: 15, // percentage for data bar
			},
		],
	},
	{
		category: 'Fundamentals',
		skills: [
			{ label: 'Semantic HTML5', knoweledge: 90 },
			{ label: 'CSS3', knoweledge: 85 },
			{ label: 'JavaScript (ES6+ та модулі)', knoweledge: 75 },
			{
				label: 'Promises, event loop',
				knoweledge: 90,
			},
			{ label: 'Package Managers (npm / Yarn)', knoweledge: 100 },
			{ label: 'Build Tools (Vite / Webpack)', knoweledge: 100 },
		],
	},
]
