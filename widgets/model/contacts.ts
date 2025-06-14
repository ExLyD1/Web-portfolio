export interface IContact {
	icon: string
	title: string
	value: {
		label: string
		link: string
	}
}

export const contacts = [
	{
		icon: '📧',
		title: 'Email',
		value: {
			label: 'sashaahnij@gmail.com',
			link: '',
		},
	},
	{
		icon: '📱',
		title: 'Телефон',
		value: {
			label: '+38 (095) 358-28-95',
			link: '',
		},
	},
	{
		icon: '🌐',
		title: 'LinkedIn',
		value: {
			label: 'Click',
			link: 'https://www.linkedin.com/in/oleksandr-yahknii-186023308/',
		},
	},
]
