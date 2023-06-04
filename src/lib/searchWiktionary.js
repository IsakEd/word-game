fetch('https://en.wiktionary.org/w/api.php?action=parse&page=katt&prop=wikitext&format=json')
	.then((res) => res.json())
	.then((res) => {
		const wikitext = res.parse.wikitext['*'];
		// Regular expression pattern to match Swedish definitions
		const nounSectionRegex = /===Noun===(.*?)\n\n/g;
		const definitionRegex = /# (.+?)\n/g;

		let nounDefinitions = [];
		let match;
		while ((match = nounSectionRegex.exec(wikitext)) !== null) {
			const nounSection = match[1];

			// Extract definitions from noun section
			while ((match = definitionRegex.exec(nounSection)) !== null) {
				const definition = match[1];
				nounDefinitions.push(definition);
			}
		}
		console.log(nounDefinitions);
	});
