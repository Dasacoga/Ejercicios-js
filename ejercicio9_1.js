//Parte 1
const ps=require("prompt-sync")
const prompt=ps()

function numero(num1,num2){
    if (num1>num2){
        console.log(1)
    }else if(num1<num2){
        console.log(-1)
    }
    else{
        console.log(0)
    }
}

const a=parseInt(prompt("Numero 1 "))
const b=parseInt(prompt("Numero 2 "))

console.log(numero(a,b))

//Parte 2

(function (x,y,z){
    console.log(x+y+z);
})(1,2,3);

(function (x){
    if (x%2==1){
        console.log("Impar")
    }else{
        console.log("par")
    }
})(5);


