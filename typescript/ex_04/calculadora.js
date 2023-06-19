"use strict";
$(function () {
    let c = 1;
    $(".suma").click(function () {
        if (c == 1) {
            let x = $("#numero1").val();
            let y = $("#numero2").val();
            try {
                if (isNaN(x & y)) {
                    throw new Error("El caracter introducido no es un numero");
                }
                else {
                    let suma = parseFloat(x) + parseFloat(y);
                    console.log(suma);
                    const $span = document.createElement("span"); //Crea el elemento span
                    $span.innerHTML = suma;
                    $($span).insertAfter("#resul");
                    c = 2;
                }
            }
            catch (e) {
            }
        }
        else {
            location.reload();
        }
    });
    $(".resta").click(function () {
        if (c == 1) {
            let x = $("#numero1").val();
            let y = $("#numero2").val();
            try {
                if (isNaN(x & y)) {
                    throw new Error("El caracter introducido no es un numero");
                }
                else {
                    let resta = parseFloat(x) - parseFloat(y);
                    console.log(resta);
                    const $span = document.createElement("span"); //Crea el elemento span
                    $span.innerHTML = resta;
                    $($span).insertAfter("#resul");
                    c = 2;
                }
            }
            catch (e) {
            }
        }
        else {
            location.reload();
        }
    });
    $(".multiplicacion").click(function () {
        if (c == 1) {
            let x = $("#numero1").val();
            let y = $("#numero2").val();
            try {
                if (isNaN(x & y)) {
                    throw new Error("El caracter introducido no es un numero");
                }
                else {
                    let multiplicacion = parseFloat(x) * parseFloat(y);
                    console.log(multiplicacion);
                    const $span = document.createElement("span"); //Crea el elemento span
                    $span.innerHTML = multiplicacion;
                    $($span).insertAfter("#resul");
                    c = 2;
                }
            }
            catch (e) {
            }
        }
        else {
            location.reload();
        }
    });
    $(".division").click(function () {
        if (c == 1) {
            let x = $("#numero1").val();
            let y = $("#numero2").val();
            try {
                if (isNaN(x & y)) {
                    throw new Error("El caracter introducido no es un numero");
                }
                else {
                    let division = parseFloat(x) / parseFloat(y);
                    console.log(parseFloat(y));
                    const $span = document.createElement("span"); //Crea el elemento span
                    $span.innerHTML = division;
                    $($span).insertAfter("#resul");
                    c = 2;
                }
            }
            catch (e) {
            }
        }
        else {
            location.reload();
        }
    });
});
