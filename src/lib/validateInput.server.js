import { languages } from './languages.server';

export function validateInput(str, lang) {
	//str->Bool
	const charSet = languages[lang].characters;
	if (str.length === 0) {
		return false;
	}
	let arr = str.split('').map((c) => charSet.split('').indexOf(c.toLowerCase()) > -1);
	console.log(arr.every(Boolean));
	return arr.every(Boolean);
}
