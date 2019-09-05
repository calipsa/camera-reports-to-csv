# @calipsa/camera-reports-to-csv

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

## Installation
```bash
# using npm:
npm install --save @calipsa/camera-reports-to-csv

# or if you like yarn:
yarn add @calipsa/camera-reports-to-csv
```

## Usage
```javascript
import cameraReportsToCsv from '@calipsa/camera-reports-to-csv'

const reports = [
  {
    //
  },
  // ...
]

const csv = cameraReportsToCsv(reports)
console.log(csv)
```

[npm-url]: https://npmjs.org/package/@calipsa/camera-reports-to-csv
[downloads-image]: http://img.shields.io/npm/dm/@calipsa/camera-reports-to-csv.svg
[npm-image]: http://img.shields.io/npm/v/@calipsa/camera-reports-to-csv.svg
[david-dm-url]:https://david-dm.org/inker/@calipsa/camera-reports-to-csv
[david-dm-image]:https://david-dm.org/inker/@calipsa/camera-reports-to-csv.svg
[david-dm-dev-url]:https://david-dm.org/inker/@calipsa/camera-reports-to-csv#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/@calipsa/camera-reports-to-csv/dev-status.svg
