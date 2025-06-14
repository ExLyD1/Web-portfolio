export interface IFilterDiff {
	id: 'easy' | 'medium' | 'hard'
	label: string
	color: string
}
export interface IFilterType {
	id: 'code' | 'demo' | 'video'
	label: string
	description: string
}
export interface IFilterSort {
	value:
		| 'date-new'
		| 'date-asc'
		| 'title'
		| 'difficulty-more'
		| 'difficulty-less'
	label: string
}

export const difficultyOptions: IFilterDiff[] = [
	{ id: 'easy', label: 'Легкий', color: 'text-green-300' },
	{ id: 'medium', label: 'Середній', color: 'text-yellow-300' },
	{ id: 'hard', label: 'Складний', color: 'text-red-300' },
]
export const contentOptions: IFilterType[] = [
	{ id: 'code', label: '📝 Код', description: 'Вихідний код проекту' },
	{ id: 'video', label: '🎥 Відео', description: 'Відео демонстрація' },
	{ id: 'demo', label: '🚀 Демо', description: 'Живий сайт' },
]
export const sortOptions: IFilterSort[] = [
	{ value: 'date-new', label: 'Найновіші' },
	{ value: 'date-asc', label: 'Найстаріші' },
	{ value: 'difficulty-more', label: 'Найскладніші' },
	{ value: 'difficulty-less', label: 'Найлегші' },
	{ value: 'title', label: 'За назвою' },
]
