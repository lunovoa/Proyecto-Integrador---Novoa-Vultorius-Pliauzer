let categorias = document.querySelector(".barra");

fetch('https://dummyjson.com/products/category-list') 
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)   

    let resultado = data 
    for (let i = 0; i < resultado.length; i++) { 
        categorias.innerHTML += `
        <li>${resultado[i]} </li>` 
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
    console.log(data.result)

    let producto = data.result
    for (let i=0; i < producto.length; i++){ 
        product.innerHTML += `<article>
        <img src = >
        <h1> Producto: ${producto[i].title}</h1>
        <h3> Marca: ${producto[i].brand} </h3>       
        <p>Descripcion: ${producto[i].description} </p>
        <h3> Precio: ${producto[i].price} </h3>
        <p>${producto[i]}.tags</p> 
        <h3> Stock: ${producto[i].stock} </h3> 
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
    console.log(data.result) 

    let resena1 = data.result
    for (let i=0; i < resena1.length; i++){ 
        product.innerHTML += `<li>
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


