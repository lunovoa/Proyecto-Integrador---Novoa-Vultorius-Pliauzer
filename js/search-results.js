let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")
let respuesta = document.querySelector(".error");

buscador.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = input.value

    if (busqueda == ""){
        return respuesta.innerHTML = "Completar la busqueda"

    } else if (busqueda.length < 3){
        return respuesta.innerHTML = "Tiene que tener al menos 3 caracteres"
    }

   let url = new URLSearchParams(location.search)
   let busquedaUsuario = url.get("category") 
   let endpoint = "https://dummyjson.com/products/search?q=" + busquedaUsuario;

   let resultado = document.querySelector(".section-search");
 
   resultado.innerHTML = `<h2>Resultados de busqueda para: ${busquedaUsuario}</h2>`;  

   


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
        categorias.innerHTML += `
        <li class="categoria">
        <a href="./category.html?category=${resultado[i]}">${resultado[i]}</a>
        </li>  
        `  
    }  
})

.catch(function(e){
    console.log("el error es:" +e);
}); 
