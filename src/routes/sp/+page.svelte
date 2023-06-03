<script>
	import TextInput from '../../components/TextInput.svelte';
	import ScoreContainer from '../../lib/ScoreContainer.svelte';

	let state = {
		currentSequence: '',
		inputActive: true
	};
	const playerScore = 0;
	const computerScore = 0;

	$: state, validateInput();
	const validateInput = () => {};
</script>

<div class="content">
	<div id="score-area" class="flex-row">
		<ScoreContainer user="you" score={playerScore} />
		<ScoreContainer user="computer" score={computerScore} />
	</div>

	<div class="input-area">
		<TextInput {...state} on:input={validateInput} />
	</div>
</div>

<style>
	.content {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#score-area {
		gap: 20vw;
	}
</style>
