//parte 1

console.log("Funciones")

//suma

function suma(num1,num2){
    return `El reultado de la suma es ${num1+num2}` 
}
console.log(suma(3,3))


//resta

function resta(numeromay,numeromen){
    return `el resultado de la resta es ${numeromay-numeromen}`
}
console.log(resta(9,7))

//multiplicación

function multi(num1,num2){
    return `el resultado de la mutiplicación es: ${num1*num2}`
}
console.log(multi(8,6))


//division

function division(dividen,divisor){
    return `El resultado de la division es: ${dividen/divisor}`
}
console.log(division(81,9))



//parte 2 de dolars a pesos 

function dedolarapeso(dolar){
    return `El valor de ${dolar} dolares en pesos Colombianos es: ${dolar*4563}`
}
console.log(dedolarapeso(100))
// ded pesos a dolares

function depesoadolar(peso){
    return `el valor de ${peso} pesos colombianos en dolares es ${peso/4563}`
}
console.log(depesoadolar(900000))

//parte 3 areas

function areacua(lado){
    return `el area del cuadrado es de: ${lado*lado}`
}
function areacir(radio){
    return `el area del circulo es de: ${Math.PI*radio*radio}`
}
function areatri(base,altura){
    return `el area del triangulo es ${(base*altura)/2}`
}

console.log(areacua(5)+", "+areacir(4)+" y "+areatri(5,9))