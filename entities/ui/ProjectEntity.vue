<template>
	<div
		class="bg-purple-900/40 flex flex-col justify-between backdrop-blur-sm rounded-lg overflow-hidden border border-purple-700/50 hover:border-purple-600 transition-all duration-300 group"
	>
		<div>
			<!-- project img -->
			<div class="relative h-52 overflow-hidden">
				<NuxtImg
					v-if="project.image"
					:src="project.image"
					class="absolute inset-0 w-full h-full object-cover"
				/>

				<div
					v-else
					class="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-violet-600/50"
				></div>

				<div
					class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"
				></div>

				<!-- Difficulty Badge -->
				<div class="absolute top-3 left-3">
					<span
						class="px-2 py-1 rounded text-xs font-medium"
						:class="difficultyColor"
					>
						{{ difficultyLabel }}
					</span>
				</div>
			</div>

			<!-- Project Content -->
			<div class="p-4">
				<h3 class="text-lg font-semibold text-purple-100 mb-2">
					{{ project.title }}
				</h3>
				<p class="text-purple-300 text-sm mb-3 line-clamp-2">
					{{ project.description }}
				</p>

				<!-- Date -->
				<div class="flex items-center gap-2 text-xs text-purple-300 mb-3">
					<NuxtImg class="w-4 h-4" src="/calendar.png"></NuxtImg>
					<span>{{ formattedDate }}</span>
				</div>

				<!-- Tags -->
				<div class="flex flex-wrap gap-1 mb-4">
					<span
						v-for="tag in project.tags.slice(0, 3)"
						:key="tag"
						class="px-2 py-1 bg-purple-800/50 text-purple-200 rounded text-xs"
					>
						{{ tag }}
					</span>
					<span
						v-if="project.tags.length > 3"
						class="px-2 py-1 bg-purple-800/50 text-purple-400 rounded text-xs"
					>
						+{{ project.tags.length - 3 }}
					</span>
				</div>
			</div>
		</div>

		<!-- Action Buttons -->
		<div
			class="p-4"
			v-if="project.project_link || project.code_link || project.video_link"
		>
			<div class="flex space-x-3 border-t border-purple-950 pt-2 h-[48px]">
				<NuxtLink
					v-if="project.project_link"
					:to="project.project_link"
					@click.stop
					target="_blanc"
					class="px-4 py-2 border border-purple-500 text-purple-200 rounded-lg hover:border-purple-400 hover:text-purple-100 transition-all duration-300 text-sm hover:scale-105"
				>
					Демо
				</NuxtLink>
				<NuxtLink
					v-if="project.code_link"
					:to="project.code_link"
					@click.stop
					target="_blanc"
					class="px-4 py-2 border border-purple-500 text-purple-200 rounded-lg hover:border-purple-400 hover:text-purple-100 transition-all duration-300 text-sm hover:scale-105"
				>
					Код
				</NuxtLink>
				<NuxtLink
					v-if="project.video_link"
					:to="project.video_link"
					@click.stop
					target="_blanc"
					class="px-4 py-2 border border-purple-500 text-purple-200 rounded-lg hover:border-purple-400 hover:text-purple-100 transition-all duration-300 text-sm hover:scale-105"
				>
					Відео
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IProject } from '~/widgets/model/projects'

const props = defineProps<{ project: IProject }>()

// Колір бейджу складності
const difficultyColor = computed(() => {
	switch (props.project.difficulty) {
		case 'easy':
			return 'text-green-300 bg-green-900/40'
		case 'medium':
			return 'text-yellow-300 bg-yellow-900/40'
		case 'hard':
			return 'text-red-300 bg-red-900/40'
		default:
			return 'text-purple-300 bg-purple-900/40'
	}
})

// Текстовий лейбл складності
const difficultyLabel = computed(() => {
	switch (props.project.difficulty) {
		case 'easy':
			return 'Легкий'
		case 'medium':
			return 'Середній'
		case 'hard':
			return 'Складний'
		default:
			return 'Невідомо'
	}
})

// Відформатована дата
const formattedDate = computed(() => {
	const d = new Date(props.project.date)
	return d.toLocaleDateString('uk-UA', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
})
</script>
