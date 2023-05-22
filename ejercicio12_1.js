const carro={

    marca:"Mitsubishi",
    modelo:"supra",
    año:"2003",
    color:"negro",

    descripcion: function(){
        console.log("Hola! Mi marca es "+this.marca+", soy modelo "+this.modelo+" "+this.año+" y mi color es "+this.color)
    }
} 
console.log(carro.año)
console.log(carro.color)
console.log(carro.marca)
console.log(carro.modelo)

carro.descripcion()
