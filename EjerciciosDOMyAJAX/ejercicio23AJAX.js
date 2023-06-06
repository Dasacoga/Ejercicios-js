
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
});

/*Abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/posts/26");
/*envia la peticioN*/
ajax.send();

const ajax2 = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
    $lista2 = document.getElementById("lista2"), //variable que hace referencia al nodo ol del HTML id="lista"
    $fragmento2 = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

//Asignación de los eventos que se vayan a manipular en la petición
ajax2.addEventListener("readystatechange", (e) => { 
    
    if (ajax2.readyState !== 4) return; 

    if (ajax2.status >= 200 && ajax2.status < 300) { //Si la respuesta es satisfactoria
        let json2 = JSON.parse(ajax2.responseText); //Convierte la respuesta Ajax en un objeto

        for (var i=0;i<json2.length;i++) { //recorre el objeto
            console.log(`Llave: ${i}, Valor: ${json2[i]}`)
            const $li = document.createElement("li"); //Crea el elemento li 
            $li.innerHTML = Object.values(json2[i])[1]+"--"+Object.values(json2[i])[2]+"--"+Object.values(json2[i])[6]; //Le asigna los valores del objeto al elemento li
            $fragmento2.appendChild($li); //Agrega el elemento li al framento para luego insertarlo en el HTML
        }

        $lista2.appendChild($fragmento2); //Cuando termina de recorrer el objeto agrega los elementos li guardados en el fragmento al elemento lista
    } else { //Si la respuesta no es satisfactoria manda un mensaje de error
        let message = ajax2.statusText || "Ocurrió un error";
        $lista2.innerHTML = `Error ${ajax2.status}: ${message}`;
    }
});

/*Abre la petición con el método GET.*/
ajax2.open("GET", "https://jsonplaceholder.typicode.com/users/");
/*envia la peticioN*/
ajax2.send();

