import swedish from '$lib/dictionaries/swedish.js';
import { languages } from '$lib/languages';

function compute(str, lang) {
	const dict = swedish;
	console.log(lang);

	if (dict[alphIndex(str)].indexOf(str) >= 0) {
		//const definition = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${str}`);
		//console.log(definition)

		return { status: -1, wordstring: str, intended: null };
	} else {
		// The collection of possible words based on the initial letter
		const pool = dict[alphIndex(str)].filter((d) => d.startsWith(str));

		if (pool.length === 0) {
			return { status: 2, wordstring: 'Bluff' };
		}
		const possibleValidResponses = pool.filter(
			(d) => dict[alphIndex(str)].indexOf(d.slice(0, str.length + 1)) === -1
		);

		// If there are no possible valid responses
		if (possibleValidResponses.length === 0) {
			return { status: 3, wordstring: pool[(possibleValidResponses.length * Math.random()) | 0] };
		}

		// Choose a word that the AI intends to play
		const randomWord = possibleValidResponses[(possibleValidResponses.length * Math.random()) | 0];
		const wordstring = randomWord.slice(0, str.length + 1);

		// Server comes up with a valid response
		if (dict[alphIndex(str)].indexOf(wordstring) === -1) {
			return { status: 1, wordstring: wordstring, intended: randomWord };
		} else {
			return { status: 0, wordstring: wordstring };
		}
	}
}

const alphIndex = (str) => {
	// The purpose of this function is to
	const a = languages['swedish'].characters;
	return a.split('').indexOf(str[0]);
};

export default compute;
