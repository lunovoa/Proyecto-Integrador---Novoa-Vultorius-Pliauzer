
let form = document.querySelector(".formulario-registro")
let email = document.querySelector(".mail-registro")
let pass = document.querySelector(".password-registro")
let pass2 = document.querySelector(".password2-registro") 


form.addEventListener("submit", function(event) {
    console.log("dentro del eventListener");
    event.preventDefault();

    if(email.value == ""){
        alert("Debe completar su mail para registrarse");  

    } else if(pass.value == ""){
        alert("Debe completar la contraseña"); 

     } else if(pass2.value == ""){
        alert("Debe completar la contraseña");  

    } else{
        //guarda los datos del formulario 
        let user = {
            correoElectronico: email.value,
            contraseña: pass.value,
            contraseña2: pass2.value 
        }

        //Guardar en localStorage
        //1. lo pasamos a string 
        let userString = JSON.stringify(user);
        localStorage.setItem("usuario", userString);

        //envia el formulario 
        this.submit() 
    }

})

form.addEventListener("submit", function(event2) {
    console.log("dentro del eventListener");
    event2.preventDefault(); 

    if (pass.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    }else if (pass2.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    }else if (pass.value == pass2.value) { 
        alert("Las contraseñas no coinciden");
    }

})