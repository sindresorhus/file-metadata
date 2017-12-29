'use strict';
const util = require('util');
const childProcess = require('child_process');
const plist = require('plist');

const execFileP = util.promisify(childProcess.execFile);

const parse = data => {
	const object = plist.parse(data);
	const ret = {};

	for (let key of Object.keys(object)) {
		const value = object[key];

		key = key.replace(/^kMDItem/, '').replace(/_/g, '');

		if (key.startsWith('FS')) {
			key = key.replace(/^FS/, 'fs');
		} else {
			key = key[0].toLowerCase() + key.slice(1);
		}

		ret[key] = value;
	}

	return ret;
};

module.exports = async filePath => {
	const {stdout} = await execFileP('mdls', ['-plist', '-', filePath]);
	return parse(stdout.trim());
};

module.exports.sync = filePath => {
	const stdout = childProcess.execFileSync('mdls', ['-plist', '-', filePath], {encoding: 'utf8'});
	return parse(stdout.trim());
};
