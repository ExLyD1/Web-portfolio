<template>
	<section
		id="about"
		class="py-16 px-6 bg-gradient-to-r from-purple-900/30 to-violet-900/30 backdrop-blur-sm relative z-10"
	>
		<div class="max-w-4xl mx-auto">
			<h2
				class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-200 to-violet-300 bg-clip-text text-transparent"
			>
				Про себе
			</h2>
			<div class="grid md:grid-cols-2 gap-12 items-center">
				<div>
					<p class="text-purple-100 text-lg mb-6 leading-relaxed">
						Вітаю! Я досвідчений розробник, що створює сучасні веб-додатки.
						Легко опановую нові технології та швидко впроваджую їх у робочі
						процеси.
					</p>
					<p class="text-purple-100 text-lg leading-relaxed">
						Працюю з передовими інструментами й завжди шукаю свіжі підходи до
						розробки. Найбільшу увагу приділяю високій продуктивності та
						зручності для кінцевих користувачів.
					</p>
				</div>
				<div
					class="bg-gradient-to-br from-purple-800/40 to-violet-800/40 p-8 rounded-2xl shadow-xl border border-purple-500/20 backdrop-blur-sm hover:shadow-purple-500/20 transition-all duration-300"
				>
					<h3 class="text-xl font-semibold mb-4 text-purple-100">
						Швидкі факти
					</h3>
					<ul class="space-y-3 text-purple-200">
						<li v-for="(fact, i) in facts" :key="i" class="flex items-center">
							<span class="w-2 h-2" :class="fact.dotClass"></span>
							{{ fact.text }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { facts } from '../model/facts'
</script>

<style scoped></style>
