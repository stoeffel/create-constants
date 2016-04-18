import test from 'ava';
import fn from './';

test('create-constants', t => {
  t.deepEqual(fn([]), {});
  t.deepEqual(fn(['UNICORN', 'RAINBOWS']), { UNICORN: 'UNICORN', RAINBOWS: 'RAINBOWS' });
  t.deepEqual(fn(['add todo', 'removeTodo']), { ADD_TODO: 'ADD_TODO', REMOVE_TODO: 'REMOVE_TODO' });
});
