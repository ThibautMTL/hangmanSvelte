<script lang="ts">
	import './secretLetter.scss';
	import { fade, slide } from 'svelte/transition';
	export let letter: string;
	export let guessed: boolean;
</script>

<div class="container title-1 uppercase">
	{#if guessed}
		<span in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>{letter}</span>
	{:else}
		<span out:fade={{ duration: 200 }} in:fade={{ duration: 200, delay: 200 }}>?</span>
	{/if}
</div>
