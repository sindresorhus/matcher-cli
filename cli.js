#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const matcher = require('matcher');

const cli = meow(`
	Usage
	  $ <input> | matcher <pattern> […]

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
	flags: {
		caseSensitive: {
			type: 'boolean',
			default: false
		}
	}
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
