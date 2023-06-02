<script>
    import TextInput from "../../components/TextInput.svelte";
	import Header from "../../components/Header.svelte";
	import ScoreContainer from "../../lib/ScoreContainer.svelte";
    
    const playerScore = 0;
    const computerScore = 0;
</script>

<Header/>

<div class="content">

    <div id="score-area" class="flex-row">
        <ScoreContainer user="you" score={playerScore} />
        <ScoreContainer user="computer" score={computerScore} />

    </div>

    <div class="input-area">

        <TextInput/>
    </div>

</div>


<style>
    .content{
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #score-area{
        gap: 20vw;
    }
</style>
