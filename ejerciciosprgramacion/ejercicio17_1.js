let pal=["edificio", "perla", "estrella", "pescado", "salero", "biblioteca", "guitarra", "dinero", "música"] 
/*Para las palabras que empiezan por el nombre a se debe imprimir el siguiente mensaje: 
“La palabra palabra es un sustantivo femenino” 
Para el resto de palabras debe imprimir el mensaje: 
“La palabra palabra es un sustantivo masculino” */
let compara=/^a/
for (i of pal){
    if(compara.test(i)){
        console.log("La palabra "+i+" es un sustantivo femenino")
    }else{
        console.log("La palabra "+i+" es un sustantivo masculino")
    }
}
//parte 2
let cade=["hola@gmail.com","holaag.con","holag.com","holag@.m","hola@gmailcom","santi@gmail.com"]
let condi=/@\w+\.com$/

for(i of cade){
    if (condi.test(i)){
        console.log("El correo "+i+" es valido")
    }else{
        console.log("El correo "+i+" es invalido")
    }
}

//parte 3

const ps=require("prompt-sync")
const prompt=ps()
let condicion1=/\d{1,}/
let condicion2=/[A-Z]{1,}/
let condicion3=/[a-z]{1,}/
var c=2
while (c==2){
    let contraseña=prompt("Escribe la contraseña ")
    if (condicion1.test(contraseña)&&condicion2.test(contraseña)&&condicion3.test(contraseña)){
        console.log("Contraseña valida")
        c=3
    }else{
        console.log("contraseña invalida intenta denuevo")
    }
}