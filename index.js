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