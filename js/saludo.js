let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")
let respuesta = document.querySelector(".error");

buscadorSaludo.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = inputSaludo.value

    if (busqueda == ""){
        busqueda.innerText = "Completar la busqueda"

    } else if (busqueda.length < 3){
        busqueda.innerText = "Tiene que tener al menos 3 caracteres"
    }
    else {
        this.submit()
    }
})


let emailGuardado = localStorage.getItem("email");
let menu = document.querySelector(".navegador");

if (emailGuardado != null) {
    menu.innerHTML += `<li>Bienvenido: ${emailGuardado}</li>
    <li><a href="./index.html" class="navegacion-principal logout">logout</a></li>`;

    let items = document.querySelectorAll(".navegador li");
    items[1].style.display = "none";
    items[2].style.display = "none";
    items[3].style.color = "white";
}