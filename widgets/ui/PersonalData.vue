<template>
	<section class="pt-24 pb-16 px-6 relative z-10 text-center">
		<div class="max-w-6xl mx-auto">
			<!-- <div
				
			>
				
			</div> -->
			<NuxtImg
				class="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-purple-500/50 object-cover"
				src="/avatar.png"
			>
			</NuxtImg>
			<h1
				class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-violet-300 to-purple-400 bg-clip-text text-transparent animate-fade-in"
			>
				Яхній Олександр
			</h1>
			<p
				class="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto animate-fade-in delay-300"
			>
				Frontend розробник з досвідом у 2 роки створення сучасних веб-сторінок
			</p>
			<div
				class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500"
			>
				<a
					href="#projects"
					class="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 hover:scale-105 scroll-smooth"
				>
					Подивитись роботи
				</a>
				<a
					href="https://docs.google.com/document/d/11syFJH28n75mSTRGcTS7LFj4rgsEqnigqfUXsdVDnOo/edit?usp=sharing"
					target="_blank"
					class="px-8 py-3 border-2 border-purple-500 text-purple-200 rounded-lg hover:bg-purple-600/20 hover:text-purple-100 transition-all duration-300 hover:scale-105 scroll-smooth"
				>
					Відкрити CV
				</a>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
