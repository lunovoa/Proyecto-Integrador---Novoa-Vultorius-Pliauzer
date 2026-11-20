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
        categorias.innerHTML += `<li>
        <a href = "./product.html">${resultado[i]}</a>
        </li>`  
    }  
})

.catch(function(e){
    console.log("el error es:" +e);
});



let product = document.querySelector(".article-product")

fetch('https://dummyjson.com/products/1')  
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let producto = data 
    { 
        product.innerHTML += `<article>

        <a href="./product.html"><img src="${producto.thumbnail}" alt="musculosa de runik" class="producto"></a>
            <h2>Producto: ${producto.title}</h2>
            <h3>Marca: ${producto.brand}</h3> 
            <p>Descripcion: ${producto.description}</p> 
            <h3>Precio: ${producto.price}</h3>  
            <a href="./category.html"><h3>${producto.category}</h3></a>
            <h3>Stock: ${producto.stock}</h3>
            <a href="./product.html" class="boton">ver detalle</a> 
            <h4>${producto.tags}</h4>   
        </article>`  
    } 
  
}) 

.catch(function(e){
    console.log("el error es:" +e);
});


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


