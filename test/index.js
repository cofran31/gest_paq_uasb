'use strict';

function ResolverSudoku() {

    function convertVector(vector) {
        var arregloDeSubCadenas = vector.split("");
        return arregloDeSubCadenas.map(Number);
    }

    function solution(cad, type) {
        var option = type || "";
        if (option == "")
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
    this.solve = function (cad, type) {
        var option = type || "";
        if (is_string(cad)) {
            var size = cad.length;
            if (size == 81) {
                var resp = solution(cad, "");
                if(option == "cadena")
                return resp.join("");
                else if(option == "vector")
                return resp;
                else 
                return resp.join("");
            } else {
                return "El tamano de la cadena no contiene 81 numeros";
            }

        } else {
            if (Array.isArray(cad)) {
                var size = cad.length;
                if (size == 81) {
                    var resp = solution(cad, "vector");
                    if(option == "cadena")
                    return resp.join("");
                    else if(option == "vector")
                    return resp;
                    else 
                    return resp;
                 } else {
                    return "El tamano del vector no tiene 81 posiciones";
                }
            }
        }
    }



    function is_string(x) {
        return Object.prototype.toString.call(x) === "[object String]"
    }
}
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = ResolverSudoku;
    }
    exports.ResolverSudoku = ResolverSudoku;
} else {
    window.ResolverSudoku = ResolverSudoku;
}