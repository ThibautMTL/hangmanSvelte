<script lang="ts">
	import Key from '../stories/Letter.svelte';
	import Letter from './Letter.svelte';
	import Draw from './Draw.svelte';

	// data from +page.server.ts
	export let data;

	// secret word random
	const secretWord = data.name;

	// guest word
	let guestWord: { value: string; guessed: boolean }[] = Array(secretWord.length).fill({
		value: '_',
		guessed: false
	});

	// category of word
	const category = data.categorie;

	// all charts in the alphabet
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	//charts enabled
	const enabled = [];

	//dice rotation
	const diceRotation = {
		x: 0,
		y: 0
	};

	//fault counter
	let fault = 0;

	/**
	 * Display alert with key pressed
	 */
	function keyPressed(event: CustomEvent<string>) {
		alert(event.detail);
	}

	/**
	 * Reveal letter
	 */
	function reveal(event: CustomEvent<number>) {
		guestWord[event.detail] = {
			value: 'X',
			guessed: true
		};
	}

	function resetGame() {
		guestWord = guestWord.map((letter) => ({
			guessed: false,
			value: '_'
		}));
	}
</script>

<Draw bind:fault />

<button on:click={() => fault++}>Add fault</button>
<p>Fault: {fault}</p>

<div class="keyboard">
	{#each alphabet.split('') as letter}
		<Key key={letter} on:keyPressed={keyPressed} />
	{/each}
</div>

<div id="guestWord">
	{#each guestWord as letter, index (index)}
		<Letter bind:letter {index} on:letterPressed={reveal} />
	{/each}
</div>
<button on:click={resetGame}>Reset</button>
<p>Secret word: {secretWord}</p>
<p>Category: {category}</p>

<style>
	.keyboard {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	#guestWord {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 40px;
	}
</style>
