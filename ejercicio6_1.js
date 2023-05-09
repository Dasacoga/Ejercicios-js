const ps=require("prompt-sync")
const prompt=ps()
//mayor a menor


var a=parseInt(prompt("Primer numero "))
var b=parseInt(prompt("Segundo numero "))
var c=parseInt(prompt("Tercer numero "))


if (a>b){
    if(b>c){
        console.log("los numeros de mayor a menor son: "+a+"  "+b+" "+c)
    }else if(b<c){
        if (a>c){
            console.log("los numeros de mayor a menor son: "+a+"  "+c+" "+b)
        }else if(a<c){
         console.log("los numeros de mayor a menor son: "+c+"  "+a+" "+b)
        }
        
    }

}else if(a<b){
    if(c>b){
        console.log("los numeros de mayor a menor son: "+c+"  "+b+" "+a)
    }else if(c<b){
        if (a>c){
            console.log("los numeros de mayor a menor son: "+b+"  "+a+" "+c)
        }else if(a<c){
            console.log("los numeros de mayor a menor son: "+b+"  "+c+" "+a)
        }
        
    }
}


//parte 2

console.log("numero par o impar")

let number=prompt("introduce un valor ");
if (number%2!=0){
    console.log("el numero es impar")
}else{
    console.log("el numero es par")
}


//parte 3
var d=prompt("Indique el numero de docenas ")
var val=60000*d
if (d>1 & d<5){
    var descu=val*0.1
}
else if (d>=5 & d<=10){
    var descu=val*0.15
}else{
    var descu=val*0.2
}
console.log("el descuento sera de "+ descu+" y el valor de la compra (aplicado el descuento) es de "+(val-descu))
