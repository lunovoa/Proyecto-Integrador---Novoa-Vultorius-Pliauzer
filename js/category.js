let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")
let respuesta = document.querySelector(".error");

buscador.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = input.value

    if (busqueda == ""){
        respuesta.innerText = "Completar la busqueda"

    } else if (busqueda.length < 3){
        respuesta.innerText = "Tiene que tener al menos 3 caracteres"
    }
    this.submit()
})


let categorias = document.querySelector(".barra");
categorias.style.listStyle = "none";

fetch('https://dummyjson.com/products/category-list') 
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)   

    let resultado = data 
    for (let i = 0; i < resultado.length; i++) { 
        categorias.innerHTML += `<li>
        <a href = "./product.html">${resultado[i]}</a>
        </li>`  
    }  
})

.catch(function(e){
    console.log("el error es:" +e);
});


