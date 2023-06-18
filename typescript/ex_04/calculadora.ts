const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
    $d:any= document.getElementById("cuerpo") //variable que hace referencia al nodo ol del HTML id="lista"
    let c=1
$(function(){
    $(".suma").click(function(){ 
        if (c==1){
            
            let x:any = $("#numero1").val()
        let y:any = $("#numero2").val()
       try {
        if (isNaN(x & y)){
            throw new Error("El caracter introducido no es un numero");
        }else{
            let suma:any=parseInt(x)+parseInt(y)
            console.log(suma)
            const $span:any = document.createElement("span"); //Crea el elemento span
            $span.innerHTML=suma
            $($span).insertAfter("#resul")
            c=2
        }
       }catch(e){

       }
    }else{

    }
        
    })
    $(".resta").click(function(){
        $("#resul").show() //Método que muestra el elemento seleccionado
    })
    $(".multiplicacion").click(function(){ //Evento click realiza una accion al dar click en el elemento.
        $("#resul").hide() //Metodo qee esconde elemento seleccionado
    })
    $(".division").click(function(){
        $("#resul").show() //Método que muestra el elemento seleccionado
    })

})