<script>
	export let score;
	export let user;
</script>

<div class="container flex-col centered">
	<h1 style="color: {user == 'you' ? 'green' : 'red'}">{score}</h1>
	<p>{user}</p>
</div>

<style>
</style>
