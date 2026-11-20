let buscador = document.querySelector(".buscador");
let input = document.querySelector(".input");
let respuesta = document.querySelector(".error");


buscador.addEventListener("submit", function(event){
    event.preventDefault();
    let busqueda = input.value

    if (busqueda == ""){
        respuesta.innerHTML = "Completar la busqueda";

    } else if (busqueda.length < 3){
        respuesta.innerHTML = "Tiene que tener al menos 3 caracteres";
    };
    location.href = "resultados.html?category=" + busqueda
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
        <a href="./category.html?category=${resultado[i]}">${resultado[i]}</a> 
        </li>`  
    }  
})

.catch(function(e){
    console.log("el error es:" +e);
});



let product = document.querySelector(".productos-seccion1")

fetch('https://dummyjson.com/products/category/mens-shoes') 
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.products)

        let productos = data.products 
        for (let i = 0; i < productos.length && i < 10; i++) { 
            product.innerHTML += `<article>
          <img src= "${productos[i].thumbnail}" class="producto">
        <h2>Titulo: ${productos[i].title}</h2>
        <p>Descripción: ${productos[i].description}</p>
        <h3>Precio: ${productos[i].price}</h3> 
        <a href="./product.html?id=${productos[i].id}" class="boton">ver detalle</a> 
        </article>`
        }
    })

    .catch(function (e) {
        console.log("el error es:" + e);
    });


let product2 = document.querySelector(".productos-seccion2")

fetch('https://dummyjson.com/products/category/sports-accessories')   
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.products)

        let productos = data.products  
        for (let i = 0; i < productos.length && i < 10; i++) { 
            product2.innerHTML += `
        <article class="art1.1"> 
        <img src= "${productos[i].thumbnail}" class="producto"> 
        <h2>Titulo: ${productos[i].title}</h2>
        <p>Descripción: ${productos[i].description}</p>
        <h3>Precio: ${productos[i].price}</h3> 
        <a href="./product.html?id=${productos[i].id}" class="boton">ver detalle</a>  
        </article>
        `
        }
    })  

    .catch(function (e) {
        console.log("el error es:" + e);
    });

