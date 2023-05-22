class figura {
    constructor(color){
        this.color=color;
    }
    saludar(){
        console.log("Hola! Soy una figura y mi color es "+ this.color)
    }
}

const circulo= new figura("gris")
console.log(circulo)
circulo.saludar()