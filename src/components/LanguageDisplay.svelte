<script>
	// Using flags to represent languages in generally a bad idea. In this case I think it's a bit more justified since the dictionaries
	// are all adapted from dictionaries from a central authority of the particular country represented on the flag.
	import { languages } from '../lib/languages';
</script>

<div id="flag-container">
	{#each Object.keys(languages) as lang}
		<img src="/flags/{lang}.png" alt={lang} />
	{/each}
</div>

<style>
	#flag-container img {
		height: 1.5rem;
		aspect-ratio: 1/1;
	}
</style>
