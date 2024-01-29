<script lang="ts">
	import Key from '../stories/Letter.svelte';
	import SecretLetter from '../stories/SecretLetter.svelte';
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

<p>Secret word: {secretWord}</p>
<p>Category: {category}</p>
<div class="flex flex-wrap justify-center items-center gap-3">
	{#each guestWord as letter, index (index)}
		<SecretLetter letter={letter.value} bind:guessed={letter.guessed} />
	{/each}
</div>
<button on:click={resetGame}>Reset</button>

<div class="flex flex-wrap justify-center">
	{#each alphabet.split('') as letter}
		<Key key={letter} on:keyPressed={keyPressed} />
	{/each}
</div>
