<script lang="ts">
	import CorrectIcon from './../icons/CorrectIcon.svelte';
	import WrongIcon from './../icons/WrongIcon.svelte';
	import './Letter.scss';
	import { fade, draw, fly } from 'svelte/transition';

	export let key: string;
	export let state: 'correct' | 'wrong' | 'default' = 'default';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		if (state !== 'default') return;
		dispatch('keyPressed', key);
	}
</script>

<button on:click={handleClick} class="key">
	<div class="relative grid place-content-center w-9 h-9">
		<span class="relative w-full uppercase title-1">{key}</span>
		<div class="svg svg--{state} absolute w-full h-full">
			{#if state === 'wrong'}
				<WrongIcon isAnimated={true} />
			{/if}
			{#if state === 'correct'}
				<CorrectIcon isAnimated={true} />
			{/if}
			<img class="text-yellow-500 h-full" src="../lib/icons/correct_icon.svg" alt="" />
		</div>
	</div>
</button>
