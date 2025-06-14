<template>
	<div>
		<!-- Personal Section -->
		<PersonalData />

		<!-- About Section -->
		<AboutMe />

		<!-- Skills Section -->
		<SkillsBlock />

		<section
			id="projects"
			class="py-16 px-6 bg-gradient-to-r from-purple-900/30 to-violet-900/30 backdrop-blur-sm relative z-10"
		>
			<div class="max-w-6xl mx-auto">
				<h2
					class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-200 to-violet-300 bg-clip-text text-transparent"
				>
					Проекти
				</h2>

				<FilterBar class="my-10" />

				<ProjectsBlock />

				<button
					v-if="
						filterStore.currentPage + 1 < filterStore.totalPages &&
						!filterStore.isLoading
					"
					@click="filterStore.loadProjects(filterStore.currentPage + 1)"
					class="flex w-fit place-self-center mt-10 px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 hover:scale-105 scroll-smooth cursor-pointer"
				>
					Завантажити ще
				</button>
			</div>
		</section>

		<!-- Contact Section -->
		<ContactsBlock />
	</div>
</template>

<script lang="ts" setup>
import { useFilterStore } from '#imports'
const filterStore = useFilterStore()
</script>
