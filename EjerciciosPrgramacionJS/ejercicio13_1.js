//clse figura
class figura {
    constructor(color){
        this.color=color;
    }
    saludar(){
        console.log("Hola! Soy una figura y mi color es "+ this.color)
    }
}

const triangulo= new figura("gris")
console.log(triangulo)
triangulo.saludar()


//clase cuadrado de figura
class cuadrado extends figura{
    constructor(color,altoyancho){
        super(color)
        this.altoyancho=altoyancho
    }
    saludar(){
        console.log("Hola! soy un cuadrado. Mi color es "+this.color+" y mis medidas son "+this.altoyancho+"x"+this.altoyancho)
    }
}
const ab=new cuadrado("azul",10)
console.log(cuadrado)
ab.saludar()


//clase circulo de figura
class circulo extends figura{
    constructor(color,radio){
        super(color)
        this.radio=radio
    }
    saludar (){
        console.log("Hola! soy un circulo. Mi color es "+this.color+" y mi radio es "+this.radio)
    }
}
 const cir=new circulo("verde",4)
 console.log(cir)
 cir.saludar()