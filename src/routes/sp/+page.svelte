<script>
	import TextInput from '../../components/TextInput.svelte';
	import ScoreContainer from '$lib/ScoreContainer.svelte';

	let state = {
		status: -1,
		currentSequence: '',
		language: 'swedish',
		playerScore: 0,
		computerScore: 0
	};
</script>

<div class="content">
	<div id="score-area" class="flex-row">
		<ScoreContainer user="you" score={state.playerScore} />
		<ScoreContainer user="computer" score={state.computerScore} />
	</div>

	<div class="input-area">
		<TextInput currentSequence={state.currentSequence} language={state.language} />
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
