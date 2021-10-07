import test from 'ava';
import {fileMetadata, fileMetadataSync} from './index.js';

test('async', async t => {
	const result = await fileMetadata('index.js');
	t.is(result.contentType, 'com.netscape.javascript-source');
	t.is(result.fsName, 'index.js');
});

test('sync', t => {
	const result = fileMetadataSync('index.js');
	t.is(result.contentType, 'com.netscape.javascript-source');
});
