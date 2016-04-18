# create-constants [![Build Status](https://travis-ci.org/stoeffel/create-constants.svg?branch=master)](https://travis-ci.org/stoeffel/create-constants)

> simple helper to create constants

It uses [decamelize](https://github.com/sindresorhus/decamelize) and removes spaces to create the constants.

## Install

```
$ npm install --save create-constants
```


## Usage

```js
const createConstants = require('create-constants');

createConstants([
  'add todo',
  'remove todo',
  'filterTodos',
]);
//=> { ADD_TODO: 'ADD_TODO', REMOVE_TODO: 'REMOVE_TODO', FILTER_TODOS: 'FILTER_TODOS' }
```


## API

### createConstants(keys)

#### input

Type: `Array`

An array of keys.


## License

MIT © [Stoeffel](http://stoeffel.github.io)
