# create-constants [![Build Status](https://travis-ci.org/stoeffel/create-constants.svg?branch=master)](https://travis-ci.org/stoeffel/create-constants)

> simple helper to create constants


## Install

```
$ npm install --save create-constants
```


## Usage

```js
const createConstants = require('create-constants');

createConstants([
  'ADD_TODO',
  'REMOVE_TODO',
]);
//=> { ADD_TODO: 'ADD_TODO', REMOVE_TODO: 'REMOVE_TODO' }
```


## API

### createConstants(keys)

#### input

Type: `Array`

An array of keys.


## License

MIT © [Stoeffel](http://stoeffel.github.io)
