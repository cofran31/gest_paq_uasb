# gest_paq_uasb [sudoku solver]

> Simple Sudoku solver in javascript.



Ver [Demo](http://200.107.241.6/sudokuTest/)

### ¿Cómo utilizar?

```bash
$ npm install gest_paq_uasb
```
**o** 
simplemente incluya `index.js` en su archivo HTML para el uso del navegador.

Ejemplo de uso:
```javascript
var ResolverSudoku = require('gest_paq_uasb');
var solver = new ResolverSudoku();

var cadena = '001700509573024106800501002700295018009400305652800007465080071000159004908007053';

var vector = [0, 0, 1, 7, 0, 0, 5, 0, 9, 5, 7, 3, 0, 2, 4, 1, 0, 6, 8, 0, 0, 5, 0, 1, 0, 0, 2, 7, 0, 0, 2, 9, 5, 0,
        1, 8, 0, 0, 9, 4, 0, 0, 3, 0, 5, 6, 5, 2, 8, 0, 0, 0, 0, 7, 4, 6, 5, 0, 8, 0, 0, 7, 1, 0, 0, 0, 1, 5, 9, 0, 0,
        4, 9, 0, 8, 0, 0, 7, 0, 5, 3
        ];
`` Opcion de entrada        
var result = solver.solve(cadena);
*o*
var result = solver.solve(vector);
```
Salida:
```javascript
'241768539573924186896531742734295618189476325652813497465382971327159864918647253'
```
### Opcion de salidas

var result = solver.solve(cadena, "cadena");

var result = solver.solve(vector, "vector");

var result = solver.solve(cadena, "vector");

var result = solver.solve(vector, "cadena");

Salidas:

```javascript
'241768539573924186896531742734295618189476325652813497465382971327159864918647253'
```

```javascript
[2,4,1,7,6,8,5,3,9,5,7,3,9,2,4,1,8,6,8,9,6,5,3,1,7,4,2,7,3,4,2,9,5,6,1,8,1,8,9,4,7,6,3,2,5,6,5,2,8,1,3,4,9,7,4,6,5,3,8,2,9,7,1,3,2,7,1,5,9,8,6,4,9,1,8,6,4,7,2,5,3]
```

```javascript
[2,4,1,7,6,8,5,3,9,5,7,3,9,2,4,1,8,6,8,9,6,5,3,1,7,4,2,7,3,4,2,9,5,6,1,8,1,8,9,4,7,6,3,2,5,6,5,2,8,1,3,4,9,7,4,6,5,3,8,2,9,7,1,3,2,7,1,5,9,8,6,4,9,1,8,6,4,7,2,5,3]
```

```javascript
'241768539573924186896531742734295618189476325652813497465382971327159864918647253'
```

### Test

```bash
Ingresar a la carpeta test y ejecutar index.html
```


