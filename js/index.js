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

    let productos = data.result
    for (let i=0; i < productos.length; i++){ 
        product.innerHTML += `<article>
          <img src = "">
          <h2>Titulo: ${productos[i].title}</h2> 
          <p>Descripción: ${productos[i].description}</p>
          <h3>Precio: ${productos[i].price}</h3> 
        </article>` 
    } 
}) 

.catch(function(e){
    console.log("el error es:" +e);
});
