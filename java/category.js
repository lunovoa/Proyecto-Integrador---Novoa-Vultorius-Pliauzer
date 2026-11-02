let categorias = document.querySelector(".seccionCategory");

fetch('https://dummyjson.com/products')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.products)   
})
.catch(function(e){
    console.log("el error es:" +e);
});

