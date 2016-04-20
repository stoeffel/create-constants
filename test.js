import test from 'ava';
import compose from 'compose-function';
import constants, {namespace, namespacedConstants} from './';

test('create-constants', t => {
  t.deepEqual(constants([]), {});
  t.deepEqual(constants(['UNICORN', 'RAINBOWS']), { UNICORN: 'UNICORN', RAINBOWS: 'RAINBOWS' });
  t.deepEqual(constants(['add todo', 'removeTodo']), { ADD_TODO: 'ADD_TODO', REMOVE_TODO: 'REMOVE_TODO' });
});

test('namespace', t => {
  const myNameConstants = compose(namespace('my/name/'), constants);

  t.deepEqual(myNameConstants([]), {});
  t.deepEqual(myNameConstants(['UNICORN', 'RAINBOWS']), { UNICORN: 'my/name/UNICORN', RAINBOWS: 'my/name/RAINBOWS' });
  t.deepEqual(myNameConstants(['add todo', 'removeTodo']), { ADD_TODO: 'my/name/ADD_TODO', REMOVE_TODO: 'my/name/REMOVE_TODO' });
});

test('namespacedConstants', t => {
  t.deepEqual(namespacedConstants('my/name/', []), {});
  t.deepEqual(namespacedConstants('my/name/', ['UNICORN', 'RAINBOWS']), { UNICORN: 'my/name/UNICORN', RAINBOWS: 'my/name/RAINBOWS' });
  t.deepEqual(namespacedConstants('my/name/', ['add todo', 'removeTodo']), { ADD_TODO: 'my/name/ADD_TODO', REMOVE_TODO: 'my/name/REMOVE_TODO' });
});
