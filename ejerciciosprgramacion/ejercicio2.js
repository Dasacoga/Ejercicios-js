//Def Variable global
var pelicula="interestelar"
console.log("Variable pelicula antes del bloque", pelicula)

//Def Variable local
let musica="Rock"
console.log("Variable pelicula antes del bloque", musica)

//bloque
{
    var pelicula="Matilda"
    console.log("Variaable pelicula en el bloque:", pelicula)

    let musica="salsa"
    console.log("Variaable musica en el bloque:", musica)
}
console.log("Variable película despues del bloque:", pelicula)
console.log("Variable música despues del bloque:", musica)
console.log("")
console.log("")

console.log("Parte 2")
//variables globales
var nombre="Santiago"
var apellido="Colorado"
console.log(nombre)
console.log(apellido)
let edad=15
{
    var nombre="David"
    let edad=20 
    let comida="pollo"
    console.log(nombre)
    console.log(edad)
    console.log(comida)
}

let comida="mantequilla"
console.log(comida)
console.log(edad)
