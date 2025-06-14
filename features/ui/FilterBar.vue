<template>
	<div
		ref="filterBarRef"
		class="bg-purple-900/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 border border-purple-700/50 mb-4 sm:mb-6 relative z-[9999]"
	>
		<!-- Mobile Layout (stack everything vertically) -->
		<div class="block lg:hidden space-y-2 sm:space-y-3">
			<!-- Search - Full width on mobile -->
			<div class="w-full">
				<div class="relative">
					<NuxtImg
						src="/search.png"
						class="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-3 w-3 sm:h-4 sm:w-4 pointer-events-none"
						alt="Search icon"
					/>
					<input
						v-model="filterStore.filters.search"
						type="text"
						placeholder="Пошук..."
						class="pl-7 sm:pl-10 w-full bg-purple-800/50 border border-purple-600 text-purple-200 placeholder-purple-400 rounded outline-none py-1.5 sm:py-2 text-sm focus:border-purple-500 focus:bg-purple-800 focus:ring-2 focus:ring-purple-500 transition-all duration-200"
					/>
				</div>
			</div>

			<!-- Filter buttons row - responsive grid -->
			<div class="grid grid-cols-2 gap-1.5 sm:gap-2">
				<!-- Difficulty Filter -->
				<div class="relative">
					<button
						@click="toggleModal('diff')"
						class="flex items-center justify-center w-full px-1.5 sm:px-2 py-1.5 sm:py-2 bg-transparent border border-purple-600 text-purple-200 rounded hover:bg-purple-700 cursor-pointer text-xs sm:text-sm transition-all min-h-[32px] sm:min-h-[36px]"
					>
						<NuxtImg
							class="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0"
							src="/filter.png"
							alt="Filter icon"
						/>
						<span class="truncate">Склад.</span>
						<span
							v-if="filterStore.filters.difficulty.length"
							class="ml-1 bg-purple-600 text-purple-200 rounded-full px-1 py-0.5 text-xs font-medium min-w-[16px] text-center"
							>{{ filterStore.filters.difficulty.length }}</span
						>
					</button>

					<!-- Mobile dropdown - better positioning -->
					<div
						v-if="showDiff"
						class="absolute mt-1 w-[160px] sm:w-[170px] bg-purple-800 border border-purple-600 rounded p-3 sm:p-4 space-y-2 sm:space-y-3 z-20 left-0 shadow-xl max-h-[240px] overflow-y-auto"
					>
						<h4 class="font-medium text-purple-200 mb-2 text-xs sm:text-sm">
							Рівень складності
						</h4>
						<div
							v-for="opt in difficultyOptions"
							:key="opt.id"
							class="flex items-center space-x-2"
						>
							<input
								type="checkbox"
								:id="opt.id"
								:value="opt.id"
								v-model="filterStore.filters.difficulty"
								class="accent-purple-500 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
							/>
							<label
								:for="opt.id"
								class="text-xs sm:text-sm cursor-pointer flex-1 min-w-0"
								:class="opt.color"
							>
								{{ opt.label }}
							</label>
						</div>
					</div>
				</div>

				<!-- Content Type Filter -->
				<div class="relative">
					<button
						@click="toggleModal('type')"
						class="flex items-center justify-center w-full px-1.5 sm:px-2 py-1.5 sm:py-2 bg-transparent border border-purple-600 text-purple-200 rounded hover:bg-purple-700 cursor-pointer text-xs sm:text-sm transition-all min-h-[32px] sm:min-h-[36px]"
					>
						<span class="truncate">Тип</span>
						<span
							v-if="filterStore.filters.contentType.length"
							class="ml-1 bg-purple-600 text-purple-200 rounded-full px-1 py-0.5 text-xs font-medium min-w-[16px] text-center"
							>{{ filterStore.filters.contentType.length }}</span
						>
					</button>

					<div
						v-if="showType"
						class="absolute mt-1 w-[200px] sm:w-[220px] bg-purple-800 border border-purple-600 rounded p-3 sm:p-4 space-y-2 sm:space-y-3 z-20 right-0 shadow-xl max-h-[240px] overflow-y-auto"
					>
						<h4 class="font-medium text-purple-200 mb-2 text-xs sm:text-sm">
							Тип контенту
						</h4>
						<div
							v-for="opt in contentOptions"
							:key="opt.id"
							class="flex items-start space-x-2"
						>
							<input
								type="checkbox"
								:id="`mobile-${opt.id}`"
								:value="opt.id"
								v-model="filterStore.filters.contentType"
								class="accent-purple-500 mt-0.5 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
							/>
							<div
								@click="toggleType(opt.id)"
								class="cursor-pointer flex-1 min-w-0"
							>
								<label
									:for="`mobile-${opt.id}`"
									class="text-xs sm:text-sm font-medium text-purple-200 cursor-pointer block"
								>
									{{ opt.label }}
								</label>
								<p class="text-xs text-purple-300 mt-0.5 leading-tight">
									{{ opt.description }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Second row for sorting and clear -->
			<div class="grid grid-cols-2 gap-1.5 sm:gap-2">
				<!-- Sorting Filter -->
				<div class="relative">
					<button
						@click="toggleModal('sort')"
						class="flex items-center justify-center w-full px-1.5 sm:px-2 py-1.5 sm:py-2 bg-transparent border border-purple-600 text-purple-200 rounded hover:bg-purple-700 cursor-pointer text-xs sm:text-sm transition-all min-h-[32px] sm:min-h-[36px]"
					>
						<span class="truncate">{{ getMobileSortLabel() }}</span>
					</button>

					<div
						v-if="showSort"
						class="absolute left-0 mt-1 w-[150px] sm:w-[170px] bg-purple-800 border border-purple-600 rounded py-2 sm:py-3 space-y-1 z-20 shadow-xl max-h-[200px] overflow-y-auto"
					>
						<div
							@click="selectSort(opt)"
							v-for="(opt, index) in sortOptions"
							:key="index"
							class="flex items-center space-x-2 hover:bg-purple-600 transition-all cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2"
						>
							<p class="text-xs sm:text-sm">{{ opt.label }}</p>
						</div>
					</div>
				</div>

				<!-- Clear button -->
				<button
					@click="clearAllFilters"
					class="flex items-center justify-center px-1.5 sm:px-2 py-1.5 sm:py-2 bg-transparent text-purple-300 rounded hover:text-purple-200 hover:bg-purple-700 cursor-pointer text-xs sm:text-sm transition-all min-h-[32px] sm:min-h-[36px]"
				>
					<NuxtImg
						class="w-3 h-3 sm:w-4 sm:h-4 mr-1"
						src="/clear.png"
						alt="Clear"
					/>
					<span class="truncate">Очистити</span>
				</button>
			</div>
		</div>

		<!-- Desktop Layout (horizontal) -->
		<div class="hidden lg:flex gap-3 items-center">
			<!-- Search -->
			<div class="flex-1 min-w-0">
				<div class="relative">
					<NuxtImg
						src="/search.png"
						class="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4 pointer-events-none"
						alt="Search icon"
					/>
					<input
						v-model="filterStore.filters.search"
						type="text"
						placeholder="Пошук проектів..."
						class="pl-10 w-full bg-purple-800/50 border border-purple-600 text-purple-200 placeholder-purple-400 rounded outline-none py-2 focus:border-purple-500 focus:bg-purple-800 focus:ring-2 focus:ring-purple-500 transition-all duration-200"
					/>
				</div>
			</div>

			<!-- Difficulty Filter -->
			<div class="relative">
				<button
					@click="toggleModal('diff')"
					class="flex items-center px-3 py-2 bg-transparent border border-purple-600 text-purple-200 rounded hover:bg-purple-700 cursor-pointer transition-all"
				>
					<NuxtImg
						class="h-4 w-4 mr-2 mb-[-2px]"
						src="/filter.png"
						alt="Filter icon"
					/>
					Складність
					<span
						v-if="filterStore.filters.difficulty.length"
						class="ml-2 bg-purple-600 text-purple-200 rounded-full px-2 py-0.5 text-xs font-medium"
						>{{ filterStore.filters.difficulty.length }}</span
					>
				</button>

				<div
					v-if="showDiff"
					class="absolute mt-2 w-64 bg-purple-800 border border-purple-600 rounded p-4 space-y-3 z-20 shadow-xl"
				>
					<h4 class="font-medium text-purple-200 mb-2">Рівень складності</h4>
					<div
						v-for="opt in difficultyOptions"
						:key="opt.id"
						class="flex items-center space-x-2"
					>
						<input
							type="checkbox"
							:id="`desktop-diff-${opt.id}`"
							:value="opt.id"
							v-model="filterStore.filters.difficulty"
							class="accent-purple-500"
						/>
						<label
							:for="`desktop-diff-${opt.id}`"
							class="text-sm cursor-pointer"
							:class="opt.color"
						>
							{{ opt.label }}
						</label>
					</div>
				</div>
			</div>

			<!-- Content Type Filter -->
			<div class="relative">
				<button
					@click="toggleModal('type')"
					class="px-3 py-2 bg-transparent border border-purple-600 text-purple-200 rounded hover:bg-purple-700 cursor-pointer transition-all"
				>
					Тип контенту
					<span
						v-if="filterStore.filters.contentType.length"
						class="ml-2 bg-purple-600 text-purple-200 rounded-full px-2 py-0.5 text-xs font-medium"
						>{{ filterStore.filters.contentType.length }}</span
					>
				</button>

				<div
					v-if="showType"
					class="absolute mt-2 w-64 bg-purple-800 border border-purple-600 rounded p-4 space-y-3 z-20 shadow-xl"
				>
					<h4 class="font-medium text-purple-200 mb-2">Тип контенту</h4>
					<div
						v-for="opt in contentOptions"
						:key="opt.id"
						class="flex items-start space-x-2"
					>
						<input
							type="checkbox"
							:id="`desktop-type-${opt.id}`"
							:value="opt.id"
							v-model="filterStore.filters.contentType"
							class="accent-purple-500 mt-1"
						/>
						<div @click="toggleType(opt.id)" class="cursor-pointer">
							<label
								:for="`desktop-type-${opt.id}`"
								class="text-sm font-medium text-purple-200 cursor-pointer"
							>
								{{ opt.label }}
							</label>
							<p class="text-xs text-purple-300">{{ opt.description }}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Sorting Filter -->
			<div class="relative">
				<button
					@click="toggleModal('sort')"
					class="flex items-center px-3 py-2 bg-transparent border border-purple-600 text-purple-200 rounded hover:bg-purple-700 cursor-pointer transition-all"
				>
					{{ getSortLabel() }}
				</button>

				<div
					v-if="showSort"
					class="absolute mt-2 w-64 bg-purple-800 border border-purple-600 rounded py-3 space-y-1 z-20 shadow-xl"
				>
					<div
						@click="selectSort(opt)"
						v-for="(opt, index) in sortOptions"
						:key="index"
						class="flex items-center space-x-2 hover:bg-purple-600 transition-all cursor-pointer px-4 py-2"
					>
						<p>{{ opt.label }}</p>
					</div>
				</div>
			</div>

			<!-- Clear -->
			<button
				@click="clearAllFilters"
				class="px-3 py-2 bg-transparent text-purple-300 rounded hover:text-purple-200 hover:bg-purple-700 cursor-pointer transition-all"
			>
				Очистити
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	difficultyOptions,
	contentOptions,
	sortOptions,
} from '../model/filters'
import { useFilterStore } from '#imports'

const filterStore = useFilterStore()

const showDiff = ref(false)
const showType = ref(false)
const showSort = ref(false)
const filterBarRef = ref<HTMLElement | null>(null)

const clearModals = () => {
	showDiff.value = false
	showType.value = false
	showSort.value = false
}

const clearAllFilters = () => {
	filterStore.clearAllFilters()
	clearModals()
}

function onClickOutside(event: MouseEvent) {
	if (
		(showDiff.value || showType.value || showSort.value) &&
		filterBarRef.value &&
		!filterBarRef.value.contains(event.target as Node)
	) {
		clearModals()
	}
}

// Handle escape key to close modals
function onKeyDown(event: KeyboardEvent) {
	if (event.key === 'Escape') {
		clearModals()
	}
}

onMounted(() => {
	document.addEventListener('click', onClickOutside)
	document.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
	document.removeEventListener('click', onClickOutside)
	document.removeEventListener('keydown', onKeyDown)
})

const toggleModal = (type: string) => {
	switch (type) {
		case 'diff':
			showType.value = false
			showSort.value = false
			showDiff.value = !showDiff.value
			break

		case 'type':
			showDiff.value = false
			showSort.value = false
			showType.value = !showType.value
			break

		case 'sort':
			showDiff.value = false
			showType.value = false
			showSort.value = !showSort.value
			break

		default:
			break
	}
}

const selectSort = (opt: any) => {
	filterStore.filters.sortBy = opt.value
	clearModals()
}

const getSortLabel = (): string => {
	const option = sortOptions.find(
		option => option.value === filterStore.filters.sortBy
	)
	if (!option) return 'Найскладніші'
	return option.label
}

// Shortened version for mobile
const getMobileSortLabel = (): string => {
	const option = sortOptions.find(
		option => option.value === filterStore.filters.sortBy
	)
	if (!option) return 'Складність'
	// Короткі назви для мобільних
	const mobileLabels: { [key: string]: string } = {
		Найскладніші: 'Складні',
		Найлегші: 'Легкі',
		Найновіші: 'Нові',
		Найстаріші: 'Старі',
	}
	return mobileLabels[option.label] || option.label
}

function toggleType(id: 'code' | 'demo' | 'video') {
	const idx = filterStore.filters.contentType.indexOf(id)
	if (idx === -1) filterStore.filters.contentType.push(id)
	else filterStore.filters.contentType.splice(idx, 1)
}
</script>
