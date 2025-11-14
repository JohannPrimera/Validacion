// Expresiones Regulares

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const numberRegex = /^[\+]?[(+]?[\d\s\-\(\)]{8,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Ejemplos de Validación:

//Email
console.log(emailRegex.test('jjprimera06@gmail.com'))
console.log(emailRegex.test('johannjose06gmail.com'))

//Username
console.log(usernameRegex.test('johannjose06'))
console.log(usernameRegex.test('johannjose06123'))

//Teléfono
console.log(numberRegex.test('+58 4242344243'))
console.log(numberRegex.test('johann123'))

//Contraseña
console.log(passwordRegex.test('Johann123*'))
console.log(passwordRegex.test('johann123'))

//Selectores
const countries = document.querySelector('#countries');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneCode = document.querySelector('#phone-code');
const phoneInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#form');

//Validaciones
let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countriesValidation = false;

//Funcion

const validation = (e, validation, element) => {
    const information = e.target.parentElement.children[1];
    formBtn.disabled = !usernameValidation || !emailValidation || !phoneValidation || !passwordValidation || !confirmPasswordValidation || !countriesValidation ? true : false;
    if (validation) {
        element.classList.add('correct');
        element.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        element.classList.add('incorrect');
        element.classList.remove('correct');
        information.classList.add('show-information');
    }
}

[...countries].forEach(option => {
    option.innerHTML = option.innerHTML.split('(')[0];
});

usernameInput.addEventListener('input', e => {
    usernameValidation = usernameRegex.test(e.target.value);
    validation(e, usernameValidation, usernameInput);
});

emailInput.addEventListener('input', e => {
    emailValidation = emailRegex.test(e.target.value);
    validation(e, emailValidation, emailInput);
});

countries.addEventListener('change', e => {
    const optionSelected = [...e.target.children].find(option => option.selected);
    if (optionSelected && optionSelected.value) {
        phoneCode.innerHTML = `+${optionSelected.value}`;
        countriesValidation = true;
        countries.classList.add('correct');
        countries.classList.remove('incorrect');
        phoneCode.classList.add('correct');
        phoneCode.classList.remove('incorrect');
        
        // Actualizar estado del botón
        formBtn.disabled = !usernameValidation || !emailValidation || !phoneValidation || !passwordValidation || !confirmPasswordValidation || !countriesValidation;
        
        // Ocultar mensaje de información del país
        const countryInformation = countries.parentElement.querySelector('.information');
        if (countryInformation) {
            countryInformation.classList.remove('show-information');
        }
    }
});

phoneInput.addEventListener('input', e => {
    phoneValidation = numberRegex.test(e.target.value);
    const inputDiv = e.target.parentElement.parentElement;
    const information = inputDiv.querySelector('.information');
    
    formBtn.disabled = !usernameValidation || !emailValidation || !phoneValidation || !passwordValidation || !confirmPasswordValidation || !countriesValidation;
    
    if (phoneValidation) {
        phoneInput.classList.add('correct');
        phoneInput.classList.remove('incorrect');
        if (information) {
            information.classList.remove('show-information');
        }
    } else {
        phoneInput.classList.add('incorrect');
        phoneInput.classList.remove('correct');
        if (information) {
            information.classList.add('show-information');
        }
    }
});

passwordInput.addEventListener('input', e => {
    passwordValidation = passwordRegex.test(e.target.value);
    validation(e, passwordValidation, passwordInput);
});

confirmPasswordInput.addEventListener('input', e => {
    confirmPasswordValidation = passwordInput.value === e.target.value;
    validation(e, confirmPasswordValidation, confirmPasswordInput);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const user = {
        username: usernameInput.value,
        email: emailInput.value,
        phone: `${phoneCode.innerHTML} ${phoneInput.value}`,
        password: passwordInput.value,
    }
    console.log(user);
})