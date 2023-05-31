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