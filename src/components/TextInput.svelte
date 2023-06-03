<script>
	export let currentSequence;
	export let inputActive;

	// The most trivial input validation is made here. We only set the state if the input is valid
	// Try to avoid ever passing invalid stuff to a higher instance
</script>

<!-- svelte-ignore a11y-autofocus -->
<input on:input autofocus value={currentSequence} disabled={!inputActive} />

<style>
	input {
		border: none;
		background-color: transparent;
		outline: none;
		font-size: xx-large;
	}
</style>
