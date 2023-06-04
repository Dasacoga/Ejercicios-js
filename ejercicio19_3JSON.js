let productos =`
{
    "productos":[
        {
        "Nombre":"Arroz",
        "Marca":"Diana",
        "Valor":{
            "Valor_de_compra":40000,
            "Valor_de_venta":44000
        },
        "tipo":"alimento"
    },
    {
        "Nombre":"Jabon",
        "Marca":"Ariel",
        "Valor":{
            "Valor_de_compra":15000,
            "Valor_de_venta":17000
        },
        "tipo":"aseo"
    },
    {
        "Nombre":"Detetergente",
        "Marca":"Suavitel",
        "Valor":{
            "Valor_de_compra":22000,
            "Valor_de_venta":25000
        },
        "tipo":"aseo"
    },
    {
        "Nombre":"Gaseosa",
        "Marca":"Coca-cola",
        "Valor":{
            "Valor_de_compra":2500,
            "Valor_de_venta":3000
        },
        "tipo":"bebida"
    },
    {
        "Nombre":"Aceite",
        "Marca":"Gourmet",
        "Valor":{
            "Valor_de_compra":27000,
            "Valor_de_venta":29000
        },
        "tipo":"alimento"
    },
    {
        "Nombre":"Galletas",
        "Marca":"Festival",
        "Valor":{
            "Valor_de_compra":2000,
            "Valor_de_venta":2500
        },
        "tipo":"alimento"
    },
    {
        "Nombre":"Cerveza",
        "Marca":"Poker",
        "Valor":{
            "Valor_de_compra":2500,
            "Valor_de_venta":3000
        },
        "tipo":"bebida"
    },
    {
        "Nombre":"Crema dental",
        "Marca":"Colgate",
        "Valor":{
            "Valor_de_compra":7000,
            "Valor_de_venta":7500
        },
        "tipo":"aseo"
    }
]
}`



let obj=JSON.parse(productos)
let marca=obj.productos[0].Valor.Valor_de_compra
console.log(marca)


let nuevoitem={
    "Nombre":"toallas",
    "Marca":"Nosotras",
    "Valor":{
        "Valor_de_compra":5000,
        "Valor_de_venta":5800
    },
    "tipo":"aseo"
    
}
nuevoobjetojson=obj.productos.push(nuevoitem)
console.log(obj)