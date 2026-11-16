let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")
let respuesta = document.querySelector(".error");

buscador.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = input.value

    if (busqueda == ""){
        busqueda.innerHTML = "Completar la busqueda"

    } else if (busqueda.length < 3){
        busqueda.innerHTML = "Tiene que tener al menos 3 caracteres"
    }
})
