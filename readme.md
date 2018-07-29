# matcher-cli [![Build Status](https://travis-ci.com/sindresorhus/matcher-cli.svg?branch=master)](https://travis-ci.com/sindresorhus/matcher-cli)

> Simple [wildcard](https://en.wikipedia.org/wiki/Wildcard_character) matching

Useful when you want to accept loose string input and regexes/globs are too convoluted.


## Install

```
$ npm install --global matcher-cli
```


## Usage

```
$ matcher --help

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
```


## Related

- [matcher](https://github.com/sindresorhus/matcher) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
