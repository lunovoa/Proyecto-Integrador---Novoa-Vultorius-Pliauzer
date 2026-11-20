let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")
let respuesta = document.querySelector(".error");

buscador.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = input.value

    if (busqueda == ""){
        busqueda.innerText = "Completar la busqueda"

    } else if (busqueda.length < 3){
        busqueda.innerText = "Tiene que tener al menos 3 caracteres"
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



let product = document.querySelector(".article-product"); 

let queryString = location.search;
let parametros = new URLSearchParams(queryString);
let id = parametros.get("id");

if (id) {
    fetch("https://dummyjson.com/products/" + id)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            let producto = data;

            product.innerHTML = `
                <article>
                    <img
                        src="${producto.thumbnail}"
                        alt="${producto.title}"
                        class="producto">

                    <h2>Producto: ${producto.title}</h2>
                    <h3>Marca: ${producto.brand || "Sin marca informada"}</h3>
                    <p>Descripción: ${producto.description}</p>
                    <h3>Precio: USD ${producto.price}</h3>

                    <a href="./category.html?category=${producto.category}">
                        <h3>${producto.category}</h3>
                    </a>

                    <h3>Stock: ${producto.stock}</h3>
                </article>  
            `;
        })
        .catch(function(error) {
            console.log("El error es:", error);
            product.innerHTML = "<p>No se pudo cargar el producto.</p>";
        });
} else {
    product.innerHTML = "<p>Seleccioná un producto desde el inicio o una categoría.</p>";
}


let resena = document.querySelector(".reviews"); 

fetch('https://dummyjson.com/products/1') 
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.reviews)  

    let resena1 = data.reviews
    for (let i=0; i < resena1.length; i++){  
        resena.innerHTML += `<li>
        <h3>Nombre: ${resena1[i].reviewerName}</h3>
        <h3>Rating: ${resena1[i].rating}</h3>
        <h3>Comentario: ${resena1[i].comment}</h3>
        <h5>Fecha: ${resena1[i].date}</h5>
        </li>` 

    } 
}) 

.catch(function(e){
    console.log("el error es:" +e);
});


