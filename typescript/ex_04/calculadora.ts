$(function(){
    let c=1
    $(".suma").click(function(){ 
        if (c==1){
            let x:any = $("#numero1").val()
            let y:any = $("#numero2").val()
       try {
        if (isNaN(x & y)){
            throw new Error("El caracter introducido no es un numero");
        }else{
            let suma:any=parseFloat(x)+parseFloat(y)
            console.log(suma)
            const $span:any = document.createElement("span"); //Crea el elemento span
            $span.innerHTML=suma
            $($span).insertAfter("#resul")
            c=2
        }
       }catch(e){
       }
    }else{
        location. reload()  
    }  
    })
    $(".resta").click(function(){
        if (c==1){
            let x:any = $("#numero1").val()
            let y:any = $("#numero2").val()
       try {
        if (isNaN(x & y)){
            throw new Error("El caracter introducido no es un numero");
        }else{
            let resta:any=parseFloat(x)-parseFloat(y)
            console.log(resta)
            const $span:any = document.createElement("span"); //Crea el elemento span
            $span.innerHTML=resta
            $($span).insertAfter("#resul")
            c=2
        }
       }catch(e){
       }
    }else{
        location. reload()  
    }  
})
    $(".multiplicacion").click(function(){ //Evento click realiza una accion al dar click en el elemento.
        if (c==1){
            let x:any = $("#numero1").val()
            let y:any = $("#numero2").val()
       try {
        if (isNaN(x & y)){
            throw new Error("El caracter introducido no es un numero");
        }else{
            let multiplicacion:any=parseFloat(x)*parseFloat(y)
            console.log(multiplicacion)
            const $span:any = document.createElement("span"); //Crea el elemento span
            $span.innerHTML=multiplicacion
            $($span).insertAfter("#resul")
            c=2
        }
       }catch(e){
       }
    }else{
        location. reload()  
    }  })
    $(".division").click(function(){
        if (c==1){
            let x:any = $("#numero1").val()
            let y:any = $("#numero2").val()
       try {
        if (isNaN(x & y)){
            throw new Error("El caracter introducido no es un numero");
        }else{

            let division:any=parseFloat(x)/parseFloat(y)
            console.log(parseFloat(y))
            const $span:any = document.createElement("span"); //Crea el elemento span
            $span.innerHTML=division
            $($span).insertAfter("#resul")
            c=2
        }
       }catch(e){
       }
    }else{
        location. reload()  
    }  
    })

})