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


let formLogin = document.querySelector(".formulario-login");
let campoEmail = document.querySelector(".campo-email");
let campoPass = document.querySelector(".campo-pass");
let errorLogin = document.querySelector(".error-login");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoEmail.value == "") {
        errorLogin.innerText = "El campo email es obligatorio";
    } else if (campoPass.value == "") {
        errorLogin.innerText = "El campo contraseña es obligatorio";
    } else if (campoPass.value.length < 6) {
        errorLogin.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else {
        localStorage.setItem("email", campoEmail.value);
        this.submit();
    }
});