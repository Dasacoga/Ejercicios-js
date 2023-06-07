$(function(){
    console.log($("H1").html()) //Método que muesta el contenido HTML de un elemento

    console.log($("li").hasClass("elemento9")) 
    console.log($("li").hasClass("elemento5")) 
    $("<h2>Dominado metodos</h2>").insertAfter("H1")
    $("H2").addClass("subtitulo")
    $("#Parrafo").clone().insertAfter("ul").attr("Parrafo", "segundo") //Clona el boton mostrar y lo inserta despues de este. Cambia el nombre de la clase con el metodo attr() y sustituye el cotenido de texto con el metodo text()
    $(".esconder").click(function(){ //Evento click realiza una accion al dar click en el elemento.
        $(".elemento1").hide() //Metodo qee esconde elemento seleccionado
    })
    $(".mostrar").click(function(){
        $(".elemento1").show() //Método que muestra el elemento seleccionado
    })
})