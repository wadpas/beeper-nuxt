<template>
	<nuxt-link
		to="#"
		class="flex items-center p-2 text-gray-950">
		<div class="w-8 h-8 min-w-8">
			<slot name="icon"></slot>
		</div>
		<div
			class="hidden ml-4 text-xl xl:block"
			:class="isActive">
			<slot name="name"></slot>
		</div>
	</nuxt-link>
</template>

<script setup>
	const props = defineProps({
		active: {
			type: Boolean,
			default: false,
		},
	})

	const isActive = computed(() => (props.active ? 'font-bold' : 'font-normal'))
</script>

<style lang="scss" scoped></style>
