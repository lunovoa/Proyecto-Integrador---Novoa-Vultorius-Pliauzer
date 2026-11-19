let buscadorSaludo = document.querySelector(".buscador")
let inputSaludo = document.querySelector(".input")
let respuestaSaludo = document.querySelector(".error");

buscadorSaludo.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = inputSaludo.value

    if (busqueda == ""){
        busqueda.innerHTML = "Completar la busqueda"

    } else if (busqueda.length < 3){
        busqueda.innerHTML = "Tiene que tener al menos 3 caracteres"
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