# file-metadata [![Build Status](https://travis-ci.org/sindresorhus/file-metadata.svg?branch=master)](https://travis-ci.org/sindresorhus/file-metadata)

> Get file metadata using [`mdls`](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mdls.1.html) on macOS


## Install

```
$ npm install file-metadata
```


## Usage

```js
const fileMetadata = require('file-metadata');

(async () => {
	console.log(await fileMetadata('index.js'));
	/*
	{
		contentCreationDate: 2016-10-25T18:25:46.000Z,
		contentCreationDateRanking: 2016-10-25T00:00:00.000Z,
		contentModificationDate: 2017-12-29T19:56:15.000Z,
		contentType: 'com.netscape.javascript-source',
		contentTypeTree: [
			'com.netscape.javascript-source',
			'public.script',
			'public.source-code',
			'public.data',
			'public.plain-text',
			'public.item',
			'com.netscape.javascript-source',
			'public.content',
			'public.executable',
			'public.text'
		],
		dateAdded: 2017-12-29T18:42:39.000Z,
		dateAddedRanking: 2017-12-29T00:00:00.000Z,
		displayName: 'index.js',
		fsContentChangeDate: 2017-12-29T19:56:15.000Z,
		fsCreationDate: 2016-10-25T18:25:46.000Z,
		fsCreatorCode: 0,
		fsFinderFlags: 0,
		fsInvisible: false,
		fsIsExtensionHidden: false,
		fsLabel: 0,
		fsName: 'index.js',
		fsOwnerGroupID: 20,
		fsOwnerUserID: 501,
		fsSize: 860,
		fsTypeCode: 0,
		interestingDateRanking: 2016-10-25T00:00:00.000Z,
		kind: 'JavaScript script',
		lastUsedDate: 2017-12-29T18:42:57.000Z,
		lastUsedDateRanking: 2017-12-29T00:00:00.000Z,
		logicalSize: 860,
		physicalSize: 4096,
		useCount: 1,
		usedDates: [
			2017-12-28T23:00:00.000Z
		]
	}
	*/
})();
```


## API

### fileMetadata(filePath)

Returns a `Promise<Object>`.

### fileMetadata.sync(filePath)

Returns an `Object`.


## Related

- [file-uti](https://github.com/sindresorhus/file-uti) - Get the UTI (Uniform Type Identifier) of a file on macOS


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
