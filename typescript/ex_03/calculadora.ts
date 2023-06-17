
console.log("hola como estas?")

function confirmarnum(numeroaconfirmar:any){
    var c=3
    while(c==3){ 
        numeroaconfirmar=window.prompt("Ingresa un numero") 
        try{
            if(isNaN(numeroaconfirmar)){
                throw new Error("El caracter introducido no es un numero")
            }else{
                c=2
            }
        }catch(e){
            window.alert("No ingresaste un numero")
        }

    }
    return numeroaconfirmar
}


let y=parseFloat(confirmarnum(""))
let x=parseFloat(confirmarnum(""))

function suma(a:number,b:number){
    let resultado:number=y+x
    return resultado
}
console.log(suma(x,y))

function resta(a:number,b:number){
    let resultado:number=y-x
    return resultado
}
console.log(resta(x,y))

function multiplicacion(a:number,b:number){
    let resultado:number=y*x
    return resultado
}
console.log(multiplicacion(x,y))

function division(a:number,b:number){
    let resultado:number=y/x
    return resultado
}
console.log(division(x,y))


