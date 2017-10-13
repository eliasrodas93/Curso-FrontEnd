//Validacion de nombre  apellido
const formElement = document.querySelector('form');
const nameElement = document.querySelector('#completename');
const emailElement = document.querySelector('#email');
function validateName(){
    let validar = true;
    if(!nameElement.value){
        validar = false;
    }
    console.log(validar);
}

//Validaion de correo
function validateEmail(){
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(emailElement.value)) {
      document.querySelector('#result').innerHTML = "El correo ingresado es valido";
      document.querySelector('#result').style.backgroundColor = "green";
    } else {
      document.querySelector('#result').innerHTML = "El correo ingresado no es valido";
      document.querySelector('#result').style.backgroundColor = "red";
    }
    return false;
} 
$("#submitbtn").bind("click", validateEmail);
