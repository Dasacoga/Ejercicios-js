//parte 1
let datos_personales=[{
    nombre:"Paola",
    apellido:"Gamba",
    correo:"linda@gmail.com",
    telefono:37387872837,
    nacionalidad:"Colombiana"
},{
    nombre:"Marta",
    apellido:"Cierra",
    correo:"agua@gmail.com",
    telefono:37546872837,
    nacionalidad:"Colombiana"
},{
    nombre:"Pedro",
    apellido:"Aguacal",
    correo:"perro@gmail.com",
    telefono:3738721212,
    nacionalidad:"Colombiano"
},{
    nombre:"David",
    apellido:"Gonzales",
    correo:"gato@gmail.com",
    telefono:78273892212,
    nacionalidad:"Colombiano"
},{
    nombre:"Esteban",
    apellido:"Martinez",
    correo:"tortuga@gmail.com",
    telefono:784782378233,
    nacionalidad:"Colombiano"
}
]

let formaJSON=JSON.stringify(datos_personales)
console.log(datos_personales)
console.log(formaJSON)

//parte 2

const Peliculas=`
{
    "Peliculas":[
        {
        "Nombre":"Avatar",
        "Año":2009,
        "productora":"20th Century Fox",
        "duracion":"2h 42m"
        },
        {
        "Nombre":"Rápidos y furiosos: 5in control",
        "Año":2011,
        "productora":"Universal Pictures",
        "duracion":"2h 10m"
        }
        ,
        {
        "Nombre":"Buscando a nemo",
        "Año":2003,
        "productora":"Pixar",
        "duracion":"1h 40m"
        }
        ,
        {
        "Nombre":"La sirenita",
        "Año":2008,
        "productora":"Disney",
        "duracion":"1h 17m"
        }
        ,
        {
        "Nombre":"cars",
        "Año":2006,
        "productora":"Disney",
        "duracion":"1h 46m"
        }
    ]
}
`

console.log(Peliculas)
let objepeli=JSON.parse(Peliculas)
console.log(objepeli)