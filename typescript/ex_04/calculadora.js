"use strict";
const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
$d = document.getElementById("cuerpo"); //variable que hace referencia al nodo ol del HTML id="lista"
let c = 1;
$(function () {
    $(".suma").click(function () {
        if (c == 1) {
            let x = $("#numero1").val();
            let y = $("#numero2").val();
            try {
                if (isNaN(x & y)) {
                    throw new Error("El caracter introducido no es un numero");
                }
                else {
                    let suma = parseInt(x) + parseInt(y);
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
            $("cuerpo").remove();
            $($d).insertAfter("h2");
        }
    });
    $(".resta").click(function () {
        $("#resul").show(); //Método que muestra el elemento seleccionado
    });
    $(".multiplicacion").click(function () {
        $("#resul").hide(); //Metodo qee esconde elemento seleccionado
    });
    $(".division").click(function () {
        $("#resul").show(); //Método que muestra el elemento seleccionado
    });
});
