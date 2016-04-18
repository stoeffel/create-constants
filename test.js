import test from 'ava';
import fn from './';

test('create-constants', t => {
  t.deepEqual(fn(['UNICORN', 'RAINBOWS']), { UNICORN: 'UNICORN', RAINBOWS: 'RAINBOWS' });
});
