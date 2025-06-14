<template>
	<div
		class="bg-gradient-to-br from-purple-800/30 to-violet-800/30 p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm group"
	>
		<h3
			class="text-xl font-semibold mb-4 text-purple-100 group-hover:text-purple-50 transition-colors"
		>
			{{ category }}
		</h3>
		<div class="space-y-3">
			<div
				v-for="(skill, sIdx) in skills"
				:key="sIdx"
				class="flex items-center justify-between"
			>
				<span
					class="text-purple-200 group-hover:text-purple-100 transition-colors"
					>{{ skill.label }}</span
				>
				<div class="w-24 bg-purple-900/50 rounded-full h-2">
					<div
						class="bg-gradient-to-r from-purple-400 to-violet-400 h-2 rounded-full animate-pulse"
						:style="{ width: `${skill.knoweledge}%` }"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ISkill } from '~/widgets/model/skills'
const props = defineProps<{
	skill: ISkill
}>()

const category = computed(() => props.skill.category)
const skills = computed(() => props.skill.skills)
</script>

<style scoped></style>
