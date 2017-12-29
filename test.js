import test from 'ava';
import m from '.';

test('async', async t => {
	const result = await m('index.js');
	t.is(result.contentType, 'com.netscape.javascript-source');
	t.is(result.fsName, 'index.js');
});

test('sync', t => {
	const result = m.sync('index.js');
	t.is(result.contentType, 'com.netscape.javascript-source');
});
