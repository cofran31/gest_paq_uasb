# gest_paq_uasb [sudoku solver]

> Simple Sudoku solver in javascript.



Ver [Demo](https://#)

### ¿Cómo utilizar?

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


