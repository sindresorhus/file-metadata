import {promisify} from 'node:util';
import childProcess from 'node:child_process';
import plist from 'plist';

const execFileP = promisify(childProcess.execFile);

const parse = data => {
	const object = plist.parse(data);
	const returnValue = {};

	for (let [key, value] of Object.entries(object)) {
		key = key.replace(/^kMDItem/, '').replace(/_/g, '');
		key = key.startsWith('FS') ? key.replace(/^FS/, 'fs') : key[0].toLowerCase() + key.slice(1);
		returnValue[key] = value;
	}

	return returnValue;
};

export async function fileMetadata(filePath) {
	const {stdout} = await execFileP('mdls', ['-plist', '-', filePath]);
	return parse(stdout.trim());
}

export function fileMetadataSync(filePath) {
	const stdout = childProcess.execFileSync('mdls', ['-plist', '-', filePath], {
		encoding: 'utf8',
		stdio: ['ignore', 'pipe', 'ignore'],
	});

	return parse(stdout.trim());
}
