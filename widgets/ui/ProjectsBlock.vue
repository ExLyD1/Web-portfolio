<template>
	<div v-if="!isLoading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
		<project-entity
			v-for="(project, idx) in sortedProjects"
			:key="idx"
			:project
			class="z-0"
		></project-entity>
	</div>
	<Loader v-else />
</template>

<script setup lang="ts">
import { useFilterStore } from '#imports'

const filterStore = useFilterStore()
const { filters, isLoading, projects } = storeToRefs(filterStore)

// 1) При старте і при каждой смене фильтров — сброс + загрузка первой страницы
watch(
	() => ({
		search: filterStore.filters.search,
		difficulty: [...filterStore.filters.difficulty],
		contentType: [...filterStore.filters.contentType],
	}),
	() => {
		filterStore.loadProjects()
	},
	{ immediate: true }
)

const sortedProjects = computed(() => {
	if (!projects.value.length) return
	let result = projects.value

	const order = { easy: 1, medium: 2, hard: 3 }
	switch (filters.value.sortBy) {
		case 'date-new':
			result.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
			)
			break

		case 'date-asc':
			result.sort(
				(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
			)
			break

		case 'title':
			result.sort((a, b) => a.title.localeCompare(b.title))
			break

		case 'difficulty-more':
			result.sort((a, b) => order[b.difficulty] - order[a.difficulty])
			break

		case 'difficulty-less':
			result.sort((a, b) => order[a.difficulty] - order[b.difficulty])
			break
		default:
			break
	}

	return result
})
</script>

<style scoped></style>
