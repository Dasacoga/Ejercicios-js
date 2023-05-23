//parte 1

const ps=require("prompt-sync")
const prompt=ps()

/*
var c=3

while (c==3){
    const numero=parseInt(prompt("Inserta un numero "))
    try{ 
        if (isNaN(numero)){
            throw new Error("El caracter introducido no es un numero")
        }
        else{
            c=2
        }
    }catch(error){
        console.log("¡Cuidado! No se reciben datos no numéricos.")
    }finally{
        console.log("Análisis de datos terminado.")
    }
}

*/
//parte 2 calculadora

const opciones=["1.suma", "2.resta", "3.multiplicación","4.division","5.potencia", "6.Raiz "]
var seleccion
var numerouno,numerodos

var e=0
while (e==0){
    console.log ("¿Que operacion te gustaria hacer?")
    console.log(opciones)
    seleccion=parseInt(prompt())
    try {
        if (opciones[seleccion-1]==undefined){
            throw new Error("opcion erronea")
        }else{
            console.log("has escogido la opcion de "+opciones[seleccion-1])
            e=1
        }
    }catch(error){
        console.log("introduce una opcion valida")
    }
}

var c=3

while (c==3){
    numerouno=parseInt(prompt("Inserta el primer numero "))
    try{ 
        if (isNaN(numerouno)){
            throw new Error("El caracter introducido no es un numero")
        }else if ((isNaN(numerodos)||numerodos<0) && (seleccion-1)==5 ){
            throw new Error("El caracter introducido no es valido")
        }
        else{
            c=2
        }
    }catch(error){
        console.log("¡Cuidado! caracter no valido")
    }   
}
var c=3

while (c==3){
    numerodos=parseInt(prompt("Inserta el segundo numero "))
    try{ 
        if ((isNaN(numerodos)||numerodos==0) && (seleccion-1)==3 ){
            throw new Error("El caracter introducido no es valido")
        }else if (isNaN(numerodos)){
            throw new Error("El caracter introducido no es valido")
        }
        else{
            c=2
        }
    }catch(error){
        console.log("¡Cuidado! caracter no valido")
    }
}

switch (seleccion){
    case 1:
        console.log("el resultado de la "+opciones[seleccion-1]+" es "+(numerouno+numerodos))
        break
    case 2:
        console.log("el resultado de la "+opciones[seleccion-1]+" es "+(numerouno-numerodos))
        break
    case 3:
        console.log("el resultado de la "+opciones[seleccion-1]+" es "+(numerouno*numerodos))
        break
    case 4:
        console.log("el resultado de la "+opciones[seleccion-1]+" es "+(numerouno/numerodos))
        break
    case 5:
        console.log("el resultado de la "+opciones[seleccion-1]+" es "+(Math.pow(numerouno,numerodos)))
        break
    case 6:
        console.log("el resultado de la "+opciones[seleccion-1]+" es "+(Math.pow(numerouno,(1/numerodos))))
        break
}