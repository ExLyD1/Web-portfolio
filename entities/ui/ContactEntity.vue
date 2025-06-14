<template>
	<div
		class="p-6 bg-gradient-to-br from-purple-800/30 to-violet-800/30 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20"
	>
		<div
			class="w-12 h-12 bg-purple-600/50 rounded-lg flex items-center justify-center mx-auto mb-4"
		>
			<span class="text-purple-200 text-xl">{{ contact.icon }}</span>
		</div>
		<h3 class="font-semibold mb-2 text-purple-100">
			{{ contact.title }}
		</h3>

		<NuxtLink
			class="text-purple-200"
			target="_blanc"
			:to="contact.value.link"
			v-if="contact.value.link"
			>{{ contact.value.label }}</NuxtLink
		>
		<p v-else class="text-purple-200">{{ contact.value.label }}</p>
	</div>
</template>

<script setup lang="ts">
import type { IContact } from '~/widgets/model/contacts'

const props = defineProps<{ contact: IContact }>()
const contact = computed(() => props.contact)
</script>

<style scoped></style>
