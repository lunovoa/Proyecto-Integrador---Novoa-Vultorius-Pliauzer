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



let product = document.querySelector(".productos-seccion1") 

fetch('https://dummyjson.com/products') 
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.products)

    let productos = data.products //.products es para entrar al objeto literal donde están los arrays 
    for (let i=0; i < productos.length; i++){ 
        product.innerHTML += `<article>
          <img src = "${productos[i].images}"> 
          <h2>Titulo: ${productos[i].title}</h2>  
          <p>Descripción: ${productos[i].description}</p>
          <h3>Precio: ${productos[i].price}</h3>  
        </article>` 
    } 
}) 

.catch(function(e){
    console.log("el error es:" +e);
});


let product2 = document.querySelector(".productos-seccion2") 

fetch('https://dummyjson.com/products') 
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.products)

    let productos = data.products //.products es para entrar al objeto literal donde están los arrays 
    for (let i=0; i < productos.length; i++){ 
        product2.innerHTML += `<article>
          <img src = "${productos[i].images}">  
          <h2>Titulo: ${productos[i].title}</h2>  
          <p>Descripción: ${productos[i].description}</p>
          <h3>Precio: ${productos[i].price}</h3>  
        </article>` 
    } 
}) 
          //falta el botón//

.catch(function(e){
    console.log("el error es:" +e);
});
