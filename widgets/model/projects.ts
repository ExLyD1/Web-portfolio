export interface IProject {
	date: string
	id?: number
	title: string
	description: string
	difficulty: 'easy' | 'medium' | 'hard'
	project_link: string
	code_link: string
	video_link: string
	type: string[]
	tags: string[] // technologies (example: Nuxt 3, Vue, PostgreSQL)
	image: string
}
