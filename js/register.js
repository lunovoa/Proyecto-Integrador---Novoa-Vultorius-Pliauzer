
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

    }else if(pass.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    }else if(pass2.value == ""){
        alert("Debe completar la contraseña");  

     } else if(pass2.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
        
        
    } else if(pass.value != pass2.value){
        alert("Las contraseñas no coinciden");
 
    }else{
        this.submit() 
    }
})
