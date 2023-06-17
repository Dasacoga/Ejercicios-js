console.log("hola como estas?");
function confirmarnum(numeroaconfirmar) {
    var c = 3;
    while (c == 3) {
        numeroaconfirmar = window.prompt("Ingresa un numero");
        try {
            if (isNaN(numeroaconfirmar)) {
                throw new Error("El caracter introducido no es un numero");
            }
            else {
                c = 2;
            }
        }
        catch (e) {
            window.alert("No ingresaste un numero");
        }
    }
    return numeroaconfirmar;
}
var y = parseFloat(confirmarnum(""));
var x = parseFloat(confirmarnum(""));
function suma(a, b) {
    var resultado = y + x;
    return resultado;
}
console.log(suma(x, y));
function resta(a, b) {
    var resultado = y - x;
    return resultado;
}
console.log(resta(x, y));
function multiplicacion(a, b) {
    var resultado = y * x;
    return resultado;
}
console.log(multiplicacion(x, y));
function division(a, b) {
    var resultado = y / x;
    return resultado;
}
console.log(division(x, y));
