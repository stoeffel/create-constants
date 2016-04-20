# create-constants [![Build Status](https://travis-ci.org/stoeffel/create-constants.svg?branch=master)](https://travis-ci.org/stoeffel/create-constants)

> simple helper to create constants

It uses [decamelize](https://github.com/sindresorhus/decamelize) and removes spaces to create the constants.

## Install

```
$ npm install --save create-constants
```


## Usage

```js
// createConstants :: Array -> Object
const createConstants = require('create-constants');

createConstants([
  'add todo',
  'remove todo',
  'filterTodos',
  'SORT_TODOS',
]);
/*
  => { ADD_TODO: 'ADD_TODO'
     , REMOVE_TODO: 'REMOVE_TODO'
     , FILTER_TODOS: 'FILTER_TODOS'
     , SORT_TODOS: 'SORT_TODOS'
     }
*/
```

You can namespace the constants using `namespace`.
This is useful if you create [ducks](https://github.com/erikras/ducks-modular-redux).

```js
// createConstants :: Array -> Object
const createConstants = require('create-constants');
// namespace :: String -> Object -> Object
const namespace = require('create-constants').namespace;


R.compose(
  namespace('myapp/todo/'),
  createConstants
)([
  'add',
  'remove',
  'filter',
  'sort'
]);
/*
  => { ADD: 'myapp/todo/ADD'
     , REMOVE: 'myapp/todo/REMOVE'
     , FILTER: 'myapp/todo/FILTER'
     , SORT: 'myapp/todo/SORT'
     }
*/


// or shorter
// namespacedConstants :: String -> Array -> Object
const namespacedConstants = require('create-constants').namespacedConstants;

namespacedConstants('myapp.todo.', [
  'add',
  'remove',
  'filter',
  'sort'
]);
/*
  => { ADD: 'myapp.todo.ADD'
     , REMOVE: 'myapp.todo.REMOVE'
     , FILTER: 'myapp.todo.FILTER'
     , SORT: 'myapp.todo.SORT'
     }
*/
```


## License

MIT © [Stoeffel](http://stoeffel.github.io)
