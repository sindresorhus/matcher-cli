import test from 'ava';
import execa from 'execa';

const fixtureFiles = [
	'cli.js',
	'license',
	'package.json',
	'readme.md',
	'test.js',
].join('\n');

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['*.js', '!test.js'], {input: fixtureFiles});
	t.is(stdout, 'cli.js');
});
