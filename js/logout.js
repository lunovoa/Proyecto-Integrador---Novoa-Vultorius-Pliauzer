let buscadorLogout = document.querySelector(".buscador")
let inputLogout = document.querySelector(".input")
let respuestaLogout = document.querySelector(".error");

buscadorLogout.addEventListener("submit", function(event){
    event.preventDefault()
    let busqueda = inputLogout.value

    if (busqueda == ""){
        busqueda.innerHTML = "Completar la busqueda"

    } else if (busqueda.length < 3){
        busqueda.innerHTML = "Tiene que tener al menos 3 caracteres"
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