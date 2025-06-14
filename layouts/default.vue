<template>
	<div
		class="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white relative"
	>
		<!-- Header -->
		<header-feature></header-feature>

		<!-- Content -->
		<main class="flex-grow">
			<slot></slot>
		</main>

		<!-- Footer -->
		<footer-feature></footer-feature>

		<!-- Animated Background Effects -->
		<div class="absolute inset-0 overflow-hidden">
			<div
				class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
			></div>
			<div
				class="absolute top-3/4 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-2xl animate-pulse delay-700"
			></div>
			<div
				class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"
			></div>
			<!-- Floating particles -->
			<div
				class="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"
			></div>
			<div
				class="absolute top-40 right-20 w-1 h-1 bg-violet-300 rounded-full animate-bounce delay-500"
			></div>
			<div
				class="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce delay-700"
			></div>
			<div
				class="absolute bottom-20 right-1/3 w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-1000"
			></div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
