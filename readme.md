# file-metadata

> Get file metadata using [`mdls`](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mdls.1.html) on macOS

## Install

```
$ npm install file-metadata
```

## Usage

```js
import fileMetadata from 'file-metadata';

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
```

## API

### fileMetadataAsync(filePath)

Returns a `Promise<object>` with the properties seen in the above example.

### fileMetadataSync(filePath)

Returns an `object` with the properties seen in the above example.

## Related

- [file-uti](https://github.com/sindresorhus/file-uti) - Get the UTI (Uniform Type Identifier) of a file on macOS
