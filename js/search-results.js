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
    }else if (busqueda == null){
        respuesta.innerHTML = `No hay resultados para el término: ${busquedaUsuario}`
    }
    else {
        this.submit()
    }

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



let url = new URLSearchParams(location.search)
let busquedaUsuario = url.get("category")
let endpoint = "https://dummyjson.com/products/search?q=" + busquedaUsuario;

let resultado = document.querySelector(".section-search");

let h2 = document.querySelector(".h2-search")
h2.innerHTML = `<h2>Resultados de busqueda para: ${busquedaUsuario}</h2>`

fetch(endpoint)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.products)

    let productos = data.products

    if (productos.length == 0){
        alert("No hay resultados para el termino: " + busquedaUsuario)
        resultado.innerText = `No se encontraron productos con esa descripción`
    } else {
    for (let i = 0; i < productos.length && i < 10; i++) {
        resultado.innerHTML += `
            <article>
            <img src= "${productos[i].thumbnail}" class="producto">
            <h2>Titulo: ${productos[i].title}</h2>
            <p>Descripción: ${productos[i].description}</p>
            <h3>Precio: ${productos[i].price}</h3>
            <a href="./product.html" class="boton">ver detalle</a>
            </article>`
        }
    }

})

.catch(function(e){
    console.log("el error es:" +e);
});
