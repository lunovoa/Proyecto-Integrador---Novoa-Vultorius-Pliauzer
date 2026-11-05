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

