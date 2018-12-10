'use strict';

function SolverSudoku() {
    function solver(cad) {
        cad = convertVector(cad);
        var testGrid = cad;
        var myFunction = function R(a, i, j, m, g) {
            for (i = 80; a[i]; i-- || A)
            ;
            for (m = 10; g = a[i] = --m; g && R(a))
                for (j in a)
                    g *= j == i || a[j] ^ m || i % 9 ^ j % 9 && i / 9 ^ j / 9 && i / 27 ^ j / 27 | i % 9 / 3 ^ j % 9 / 3
        };
        try {
            myFunction(testGrid);
        } catch (e) {
            return testGrid;
        }
    }

    function convertVector(vector) {
        var separador = "";
        var arregloDeSubCadenas = vector.split(separador);
        return arregloDeSubCadenas.map(Number);
    }
}