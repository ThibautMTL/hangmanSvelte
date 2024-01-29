<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	export let letter: { value: string; guessed: boolean };
	export let index: number;

	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('letterPressed', index);
	}
</script>

<div class="container">
	<div id="cube" class={letter.guessed ? 'guessed' : ''}>
		<div class="face top">
			{#if letter.guessed}
				<span in:fade>{letter.value}</span>
			{:else}
				<span>_</span>
			{/if}
		</div>
		<div class="face front">
			{#if letter.guessed}
				<span in:fade>{letter.value}</span>
			{:else}
				<span>_</span>
			{/if}
		</div>
		<div class="face left">
			{#if letter.guessed}
				<span in:fade>{letter.value}</span>
			{:else}
				<span>_</span>
			{/if}
		</div>
		<div class="face back">
			{#if letter.guessed}
				<span in:fade>{letter.value}</span>
			{:else}
				<span>_</span>
			{/if}
		</div>
		<div class="face right">
			{#if letter.guessed}
				<span in:fade>{letter.value}</span>
			{:else}
				<span>_</span>
			{/if}
		</div>
		<div class="face bottom">
			{#if letter.guessed}
				<span in:fade>{letter.value}</span>
			{:else}
				<span>_</span>
			{/if}
		</div>
	</div>
</div>
<button on:click={handleClick}>Reveal</button>

<style>
	.container {
		margin: 50px 0;
		width: 50px;
		height: 50px;
		perspective: 600px;
	}
	#cube {
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.5s ease-in-out;
		width: 100%;
		height: 100%;
	}

	#cube.guessed {
		transform: rotateY(900deg);
	}

	#cube .face {
		width: 50px;
		height: 50px;
		position: absolute;
		background-color: rgba(255, 255, 240, 100);
		display: grid;
		place-items: center;
		border: 0.02em solid rgba(0, 0, 0, 0.42);
		border-radius: 0.25em;
		box-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.5);
	}

	.front {
		transform: rotateY(0deg) translateZ(25px);
	}
	.back {
		transform: rotateX(180deg) rotateZ(180deg) translateZ(25px);
	}
	.right {
		transform: rotateY(90deg) translateZ(25px);
	}
	.left {
		transform: rotateY(-90deg) translateZ(25px);
	}
	.top {
		transform: rotateX(90deg) translateZ(25px);
	}
	.bottom {
		transform: rotateX(-90deg) translateZ(25px);
	}
</style>
