import { languages } from './languages';

export function inputIsValid(str, lang) {
	const validCharacters = languages[lang].characters;
	for (let i = 0; i < str.length; i++) {
		if (!validCharacters.includes(str[i])) {
			return false;
		}
	}
	return true;
}
