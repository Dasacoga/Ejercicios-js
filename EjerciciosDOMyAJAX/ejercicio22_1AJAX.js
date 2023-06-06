const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
    $lista = document.getElementById("lista"), //variable que hace referencia al nodo ol del HTML id="lista"
    $fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange", (e) => { 
    
    if (ajax.readyState !== 4) return; 

    if (ajax.status >= 200 && ajax.status < 300) { //Si la respuesta es satisfactoria
        let json = JSON.parse(ajax.responseText); //Convierte la respuesta Ajax en un objeto

        for (const key in json) { //recorre el objeto
            console.log(`Llave: ${key}, Valor: ${json[key]}`)
            const $li = document.createElement("li"); //Crea el elemento li 
            $li.innerHTML = `${key}: ${json[key]}`; //Le asigna los valores del objeto al elemento li
            $fragmento.appendChild($li); //Agrega el elemento li al framento para luego insertarlo en el HTML
        }
        $lista.appendChild($fragmento); //Cuando termina de recorrer el objeto agrega los elementos li guardados en el fragmento al elemento lista
    } else { //Si la respuesta no es satisfactoria manda un mensaje de error
        let message = ajax.statusText || "Ocurrió un error";
        $lista.innerHTML = `Error ${ajax.status}: ${message}`;
    }
    console.log(`La URL de la peticion es: ${ajax.responseURL}`)
    console.log(`El estado de la peticion es: ${ajax.readyState}`)
    console.log(`Estado de respuesta HTTP: ${ajax.status}`)
    //estado de la peticion
    switch (parseInt(ajax.readyState)){

        case 0:
            console.log("peticion no inicializada")
        break
        case 1:
            console.log("cargando peticion")
        break
        case 2:
            console.log("peticion cargada")
        break
        case 3:
            console.log("responseText tiene datos parciales")
        break
        case 4:
            console.log("completado")
        break
    }
    //estado del http
    switch (parseInt(ajax.status)){
        case 200:
            console.log("respuesta correcta")
        break 
        case 404:
            console.log("no encontrado")
        break
        case 500:
            console.log("error interno del servidor")
        break
    }
});


/*Abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/posts/26");
/*envia la peticioN*/
ajax.send();