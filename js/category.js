let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")
let respuesta = document.querySelector(".error");

buscador.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = input.value

    if (busqueda == ""){
        busqueda.innerHTML = "Completar la busqueda"

    } else if (busqueda.length < 3){
        busqueda.innerHTML = "Tiene que tener al menos 3 caracteres"
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
        </li>  `  
    }   
})

.catch(function(e){
    console.log("el error es:" +e);
}); 



let productos = document.querySelector(".section-category");

let queryString = location.search;
let parametros = new URLSearchParams(queryString);
let categoria = parametros.get("category");

if (categoria) {
    fetch("https://dummyjson.com/products/category/" + categoria + "?limit=0")  
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let resultado = data.products;

            console.log("Categoría:", categoria);
            console.log("Productos recibidos:", resultado.length);

            productos.innerHTML = "";

            for (let i = 0; i < resultado.length; i++) {
                productos.innerHTML += `
                    <article>
                        <a href="./product.html?id=${resultado[i].id}">  
                            <img
                                src="${resultado[i].thumbnail}"
                                alt="${resultado[i].title}"
                                class="producto">
                        </a>

                        <h2>${resultado[i].title}</h2>
                        <p>${resultado[i].description}</p>
                        <h3>Precio: USD ${resultado[i].price}</h3>

                        <a href="./product.html?id=${resultado[i].id}"
                           class="boton">
                            Ver detalle
                        </a>
                    </article>
                `;
            }

            if (resultado.length === 0) { 
                productos.innerHTML = "<p>No hay productos en esta categoría.</p>";
            }
        })
        .catch(function(e) {
            console.log("El error es: " + e);
            productos.innerHTML = "<p>No se pudieron cargar los productos.</p>";
        });
} else {
    productos.innerHTML = "<p>Seleccioná una categoría desde el menú.</p>";
}

console.log("Categoría:", categoria);

console.log("Se cargó el JS de category");  

