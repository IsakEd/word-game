<script>
	import LanguageDisplay from '../components/LanguageDisplay.svelte';
</script>

<div id="header" class="flex-row">
	<h3>Game</h3>
	<LanguageDisplay />
</div>

<style>
	#header {
		background-color: var(--secondary-color);
		justify-content: center;
		align-items: center;
	}
</style>
