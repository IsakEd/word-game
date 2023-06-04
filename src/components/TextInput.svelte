<script>
	import { inputIsValid } from '$lib/inputIsValid';
	import postData from '$lib/postData';

	export let currentSequence;
	export let language;
	let disabled = false;
	let textState = '';

	// The most trivial input validation is made here. We only set the state if the input is valid
	// Try to avoid ever passing invalid stuff to a higher

	const validateInput = () => {
		textState = textState.toLocaleLowerCase();
		if (!inputIsValid(textState, language) || textState.length != currentSequence.length + 1) {
			textState = currentSequence;
			return;
		}

		currentSequence = textState;
		postData('/sp/opponent', JSON.stringify(currentSequence)).then((res) => {
			const { wordstring, status } = res;
			textState = wordstring;
			disabled = false;
		});
	};

	// Disables input when correct input is sent, enables when updated
</script>

<!-- svelte-ignore a11y-autofocus -->
<input on:keyup={validateInput} autofocus {disabled} bind:value={textState} />

<style>
	input {
		border: none;
		background-color: transparent;
		outline: none;
		font-size: xx-large;
	}
</style>
