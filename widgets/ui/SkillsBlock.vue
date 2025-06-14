<template>
	<section id="skills" class="py-16 px-6 relative z-10">
		<div class="max-w-6xl mx-auto">
			<h2
				class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-200 to-violet-300 bg-clip-text text-transparent"
			>
				Навички
			</h2>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<skill-entity
					v-for="(category, idx) in skills"
					:key="idx"
					:skill="category"
				></skill-entity>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { skills } from '../model/skills'
</script>

<style scoped></style>
