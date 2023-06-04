import english from './dictionaries/english';
import swedish from './dictionaries/swedish';

export const languages = {
	swedish: {
		characters: 'abcdefghijklmnopqrstuvwxyzåäö',
		dictionary: swedish
	},
	english: {
		characters: 'abcdefghijklmnopqstuvwxyz',
		dictionary: english
	},
	spanish: {
		characters: 'abcdefghijklmnñopqrstuvxyz'
	}
};
