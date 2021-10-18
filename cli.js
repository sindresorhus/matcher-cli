#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import getStdin from 'get-stdin';
import {matcher} from 'matcher';

const cli = meow(`
	Usage
	  $ <input> | matcher <pattern> […]

	Options
	  --case-sensitive  Case-sensitive matching

	Example
	  $ ls
	  cli.js
	  license
	  package.json
	  readme.md
	  test.js
	  $ ls | matcher '*.js' '!test.js'
	  cli.js
`, {
	importMeta: import.meta,
	flags: {
		caseSensitive: {
			type: 'boolean',
			default: false,
		},
	},
});

const {input, flags} = cli;

if (input.length === 0) {
	console.error('Provide at least one pattern');
	process.exit(1);
}

(async () => {
	const lines = (await getStdin()).split(/\r?\n/);
	console.log(matcher(lines, input, flags).join('\n'));
})();
