<script lang="ts">
	import { draw } from 'svelte/transition';
	export let isAnimated = false;
</script>

<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		in:draw={isAnimated ? { duration: 300 } : undefined}
		d="M4.30322 1.21429C4.44132 2.68541 6.23684 4.42998 7.00437 5.50001C9.68494 9.23701 12.7735 12.6222 15.5676 16.2483C18.5444 20.1115 21.5765 24.0673 24.8779 27.5408C26.0467 28.7706 27.1252 30.6271 28.6136 31.2143"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
	/>
	<path
		in:draw={isAnimated ? { duration: 300, delay: 300 } : undefined}
		d="M31.2 3.05103C29.619 3.28494 26.6874 6.97477 25.3954 8.05103C19.6083 12.8714 13.8708 17.8645 8.26892 22.983C5.60689 25.4153 2.68158 27.7068 1.19995 31.2143"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
	/>
</svg>
