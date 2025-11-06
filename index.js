const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
const passwordSimpleRegex = /^.{6,}$/;

//validacion de usuario
console.log(usernameRegex.test("juan123"));

//validacion de correo
console.log(emailRegex.test("jjprimera@gmail.com"));
console.log(emailRegex.test("johan%.com"));

//validacion de telefono
console.log(phoneRegex.test("+5804242344243"));

//validacion de password
console.log(passwordSimpleRegex.test("123456"));

//selector
const countries = document.querySelector("#countries");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

//validaciones
let usernameValidacion = false;
let emailValidacion = false;
let phoneValidacion = false;
let passwordValidacion = false;
let confirmPasswordValidacion = false;
let countriesValidacion = false;

//function

const validation = (event, validation, element, message) => {
    const informacion = element.parentElement.children[1];
    if(validation){
        element.classList.add("correct");
        element.classList.remove("incorrect");
        informacion.classList.remove("show-informacion");
    }else{
        element.classList.add("incorrect");
        element.classList.remove("correct");
        informacion.classList.add("show-informacion");
    }
}

[...countries].forEach(option =>{
   option.innerHTML = (option.innerHTML.split("(")[0]);
});

usernameInput.addEventListener("input", event =>{
    usernameValidacion = USERNAME_REGEX.test(event.target.value);
    validation(event, usernameValidacion, usernameInput, "Debe tener minimo 3 caracteres max 20");
});

emailInput.addEventListener("input", event =>{
    emailValidacion = EMAIL_REGEX.test(event.target.value);
    validation(event, emailValidacion, emailInput, "Debe ser un correo valido");
});

phoneInput.addEventListener("input", event =>{
    phoneValidacion = PHONE_REGEX.test(event.target.value);
    validation(event, phoneValidacion, phoneInput, "Solo acepta numeros");
});

passwordInput.addEventListener("input", event =>{
    passwordValidacion = PASSWORD_REGEX.test(event.target.value);
    validation(event, passwordValidacion, passwordInput, "Debe incluir 1 numero y 1 letra. Maximo 16 caracteres");
});

confirmPasswordInput.addEventListener("input", event =>{
    confirmPasswordValidacion = CONFIRM_PASSWORD_REGEX.test(event.target.value);
    validation(event, confirmPasswordValidacion, confirmPasswordInput, "Debe incluir 1 numero y 1 letra. Maximo 16 caracteres");
});

countries.addEventListener("change", event =>{
    const optionSelected = [...event.target.children].find(option => option.selected);
    if (optionSelected && optionSelected.value !== "") {
        countriesValidacion = true;
        const phoneCodeSpan = document.querySelector('#phone code');
        if (phoneCodeSpan) {
            phoneCodeSpan.textContent = `+${optionSelected.value}`;
        }
        validation(event, countriesValidacion, countries, "Debe seleccionar un pais");
    } else {
        countriesValidacion = false;
        validation(event, countriesValidacion, countries, "Debe seleccionar un pais");
    }
});