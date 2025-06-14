<template>
	<section id="contact" class="py-16 px-6 relative z-10">
		<div class="max-w-4xl mx-auto text-center">
			<h2
				class="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-200 to-violet-300 bg-clip-text text-transparent"
			>
				Зв'яжіться зі мною!
			</h2>
			<p class="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
				Готовий обговорити нові проекти та можливості співробітництва
			</p>
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<contact-entity
					v-for="(contact, i) in contacts"
					:key="i"
					:contact
				></contact-entity>
			</div>
			<NuxtLink
				to="https://t.me/CHEMPION_PO_KYNI_2025"
				target="_blanc"
				class="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 hover:scale-105 text-lg"
			>
				Почати проект
			</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { contacts } from '../model/contacts'
</script>

<style scoped></style>
