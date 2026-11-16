let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")
let respuesta = document.querySelector(".error");

buscador.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = input.value

    if (busqueda == ""){
        return respuesta.innerHTML = "Completar la busqueda"

    } else if (busqueda.length < 3){
        return respuesta.innerHTML = "Tiene que tener al menos 3 caracteres"
    }

   let url = new URLSearchParams(location.search)
   let busquedaUsuario = localStorage.getItem("category")
   let resultado = document.querySelector("section-search")
   
   fetch('https://dummyjson.com/products/search?q=phone')
   .then (function(response){
    return response.json()
   })
   .then(function(data){
    let resultadoBusqueda = data.products

    for(let i = 0; i < resultadoBusqueda.length; i++){
        resultado.innerHTML += `
        <section>
            <img src= "${productos[i].thumbnail}" class="producto">
            <h2>Titulo: ${productos[i].title}</h2>
            <p>Descripción: ${productos[i].description}</p>
            <h3>Precio: ${productos[i].price}</h3> 
            <a href="./product.html" class="boton">ver detalle</a> 
        </section>
        `
    }
   })

   .catch(function(error){
    console.log(error)
})

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
        <li class="categoria"><a href="./category.html">${resultado[i]}</a></li>  
        `  
    }  
})

.catch(function(e){
    console.log("el error es:" +e);
});




let buscar = document.querySelector(".formulario-busqueda");  

form.addEventListener("submit", function(event) {
    console.log("dentro del eventListener");
    event.preventDefault();

    if(buscar.value.lenght < 2){
        alert("Debe completar la busqueda con mínimo 3 caracteres");  

    } else{
        this.submit()
    }
}) 

buscar.addEventListener("blur", function(){ 
    console.log("en blur");
    if(buscar.value == ""){ 
        alert("Debe buscar algo")
    }
})


