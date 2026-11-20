let buscador = document.querySelector(".buscador")
let input = document.querySelector(".input")
let respuesta = document.querySelector(".error");

buscador.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = input.value

    if (busqueda == ""){
        respuesta.innerText = "Completar la busqueda"

    } else if (busqueda.length < 3){
        respuesta.innerText = "Tiene que tener al menos 3 caracteres"
    }
    else {
        this.submit()
    }
})


let linkLogout = document.querySelectorAll(".logout");

if (linkLogout.length > 0) {
    linkLogout[0].addEventListener("click", function (event) {
        event.preventDefault();

        localStorage.removeItem("email");

        let items = document.querySelectorAll(".navegador li");
        items[1].style.display = "block";
        items[2].style.display = "block";
        items[3].style.display = "none";
        items[4].style.display = "none";
    });
}