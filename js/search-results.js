let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")


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


