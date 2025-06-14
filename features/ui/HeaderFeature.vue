<template>
	<header
		class="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-500/20"
	>
		<!-- navigation -->
		<nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
			<NuxtLink
				to="/"
				class="text-3xl font-bold bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent"
			>
				Evkalipt Exludya
			</NuxtLink>
			<div class="hidden md:flex space-x-8">
				<a
					v-for="link in navLinks"
					:key="link.href"
					:href="link.href"
					class="text-purple-200 hover:text-purple-100 transition-all duration-300 hover:scale-105"
				>
					{{ link.text }}
				</a>
			</div>
		</nav>

		<!-- future buttons -->
		<div></div>
	</header>
</template>

<script setup lang="ts">
const navLinks = [
	{ text: 'Про себе', href: '#about' },
	{ text: 'Навички', href: '#skills' },
	{ text: 'Проекти', href: '#projects' },
	{ text: 'Контакти', href: '#contact' },
]
</script>

<style scoped></style>
