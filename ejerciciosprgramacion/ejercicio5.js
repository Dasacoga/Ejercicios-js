let x=12
let z=16

console.log("El valor de x es "+x+" y el valor de z es "+z)


console.log("-------------------Incremento y decremento---------------------")
x++
z--
console.log("El valor de x incrementado es "+x+" y de z con decremento es "+z)




console.log("------------------Operadores lógicos-----------------------")

let valorUno=true
let valorDos=false

console.log("Negación.", !valorDos)

console.log("AND.", (valorUno && valorDos))
console.log("OR.", (valorUno || valorDos))


console.log("-----------------Operadores mátematicos----------------------")

let a=9,
    b=56

let suma = a+b, 
    resta=a-b,
    multiplicacion=a*b,
    division=a/b

console.log(`El valor de la suma es ${suma}
El valor de la resta es ${resta}
El valor de la multipliacion es ${multiplicacion}
El valor de la división es ${division}`)


console.log("-----------------Operadores comparación----------------------")

let mayor=a>b,
    menor=a<b,
    mayorIgual=a>=b,
    menorIgual=a<=b,
    igual=a==b,
    distinto=a!=b

console.log(`La variable ${a} es mayor que ${b}: ${mayor}
La variable ${a} es menor que ${b}: ${menor}
La variable ${a} es mayor o igual que ${b}: ${mayorIgual}
La variable ${a} es menor o igual que ${b}: ${menorIgual}
La variable ${a} es igual que ${b}: ${igual}
La variable ${a} es distinta que ${b}: ${distinto}`)