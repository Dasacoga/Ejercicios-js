class persona{
    constructor(){
        this.nombre=null
        this.apellido=null
        this.edad=null
        this.nacionalidad=null
    }
    set setnomb(nombre){
        this.nombre=nombre
    }
    set setape(apellido){
        this.apellido=apellido
    }
    set setedad(edad){
        this.edad=edad
    }
    set setnacionalidad(nacionalidad){
        this.nacionalidad=nacionalidad
    }
    get getnomb(){
        return "Nombre: "+this.nombre;
    }
    get getape(){
        return "Apellido: "+this.apellido;
    }
    get getedad(){
        return "Edad: "+this.edad;
    }
    get getnacionalidad(){
        return "Nacionalidad: "+this.nacionalidad;
    }
    static numpersomun(){
        console.log("Hay 8.010.359.063 personas en el mundo")
    }

}


const perso=new persona()
perso.setnomb="Marcos"
console.log(perso.getnomb)
perso.setape="Gonzales"
console.log(perso.getape)
perso.setedad=19
console.log(perso.getedad)
perso.setnacionalidad="Colombia"
console.log(perso.getnacionalidad)

persona.numpersomun()