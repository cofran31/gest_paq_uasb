# gest_paq_uasb [sudoku solver]

> Simple Sudoku solver in javascript.

[![npm-url][npm-url-svg]][npm-url]
[![build-url][build-url-svg]][build-url]
[![Dev Dependencies][dev-dependencies]][dev-dependencies-url]
[![Dependencies][dependencies]][dependencies-url]

Ver [Demo](https://samirhodzic.github.io/sudoku-solver-js)

### How to use?

```bash
$ npm install gest_paq_uasb
```
**or** 
simplemente incluya `index.js` en su archivo HTML para el uso del navegador.

Ejemplo de uso:
```javascript
var ResolverSudoku = require('gest_paq_uasb');
var solver = new ResolverSudoku();

var cadena = '001700509573024106800501002700295018009400305652800007465080071000159004908007053';

solver.solve(cadena)
```
Salida:
```javascript
'241768539573924186896531742734295618189476325652813497465382971327159864918647253'
```

### Test

```bash
$ npm test
```

[build-url]: https://travis-ci.org/SamirHodzic/sudoku-solver-js
[build-url-svg]: https://travis-ci.org/SamirHodzic/sudoku-solver-js.svg?branch=master
[dependencies]: https://david-dm.org/samirhodzic/sudoku-solver-js.svg
[dependencies-url]: https://david-dm.org/samirhodzic/sudoku-solver-js
[dev-dependencies]: https://david-dm.org/samirhodzic/sudoku-solver-js/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/samirhodzic/sudoku-solver-js?type=dev
[npm-url-svg]: https://img.shields.io/npm/v/sudoku-solver-js.svg
[npm-url]: https://www.npmjs.com/package/sudoku-solver-js
