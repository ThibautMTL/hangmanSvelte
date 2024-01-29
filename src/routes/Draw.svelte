<script lang="ts">
	import { draw } from 'svelte/transition';

	export let fault: number;
</script>

<svg width="252" height="188" viewBox="0 0 252 188" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g id="hangmanSVG">
		{#if fault >= 1}
			<path
				in:draw={{ duration: 400 }}
				id="bois_1"
				d="M1 186.606H124.485"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 2}
			<path
				in:draw={{ duration: 400 }}
				id="bois_2"
				d="M38.1211 1V184.333"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 3}
			<path
				in:draw={{ duration: 400 }}
				id="bois_3"
				d="M3.27295 1.75763H251"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 4}
			<path
				in:draw={{ duration: 400 }}
				id="corde"
				d="M195.697 1C195.697 13.2399 196.454 25.1207 196.454 37.3636"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 5}
			<path
				in:draw={{ duration: 400 }}
				id="tete"
				d="M196.454 38.1212C190.292 38.1212 181.303 38.196 181.303 46.8754C181.303 55.8199 188.312 62.0509 197.38 62.3636C202.262 62.5319 206.853 61.1693 209.754 57.4393C211.918 54.6566 212.917 47.1036 211.185 43.8872C208.226 38.3915 199.822 36.606 194.182 36.606"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 6}
			<path
				in:draw={{ duration: 400 }}
				id="corps"
				d="M195.697 63.8787C195.697 74.3821 193.424 85.0307 193.424 95.6969"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 7}
			<path
				in:draw={{ duration: 400 }}
				id="jambe_gauche"
				d="M193.424 94.9393C192.8 101.177 184.747 105.216 181.008 108.954C179.224 110.739 177.083 113.228 176 115.394"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 8}
			<path
				in:draw={{ duration: 400 }}
				id="jambe_droite"
				d="M194.182 97.212C194.419 99.1081 199.508 101.177 201 102.136C202.927 103.375 205.343 105.279 206.303 107.439C206.806 108.571 208.607 111.201 209.501 112.195C210.057 112.812 211.606 116.123 211.606 115.394"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 9}
			<path
				in:draw={{ duration: 400 }}
				id="bras_gauche"
				d="M194.182 81.3029C191.048 78.5179 187.507 76.5645 184.501 73.5588C181.765 70.8225 178.569 68.4241 174.485 68.4241"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
		{#if fault >= 10}
			<path
				in:draw={{ duration: 400 }}
				id="bras_droit"
				d="M193.424 80.5453C194.84 79.2863 197.692 78.5799 199.485 77.6834C201.517 76.6675 202.643 74.7601 204.451 73.7272C207.994 71.7029 211.067 68.6937 214.636 66.909"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
			/>
		{/if}
	</g>
</svg>
