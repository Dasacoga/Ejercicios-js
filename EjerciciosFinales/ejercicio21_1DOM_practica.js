console.log(document.getElementById("descripcion"));
console.log(document.querySelector("#descripcion"))

const elementosli=document.querySelectorAll("li")
console.log(elementosli)
console.log("Hay "+elementosli.length+" elementos en la lista")

for (i of elementosli){
    console.log(i)
}

let txto=`En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis programas tuvieron que interactuar con los 12 jueces manteniendo una conversación mediante un computador durante cinco minutos en donde se plantean una serie de preguntas con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano`
const $b=document.getElementById("descripcion2")
$b.textContent=txto


const $desc=document.getElementById(`desc`)
let b=`<a href="#">Enlace principal</a>`
$desc.innerHTML = b;

const meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"]
$ul = document.createElement("ul"); //Creando el elemento ul para listas

document.body.appendChild($ul)

for (i of meses) { //Por cada elemento del arreglo agregar un li para agregarlo dentro del ul
    const $li = document.createElement("li");
    $li.textContent = i; //el contenido de texto de la etiqueta li va a ser el elemento del arreglo
    $ul.appendChild($li); //Agregar los li al elemento ul
  }