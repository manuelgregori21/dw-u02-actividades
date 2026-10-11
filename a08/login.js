const VALID_USER = "admin";
const VALID_PASSWORD = "1234";
const isBlocked = false;


let usuario = prompt("Ingrese su usuario:");
let contrasena = prompt("Ingrese su contraseña:");

if(usuario == VALID_USER && contrasena == VALID_PASSWORD){
    console.log("Bienvenido");


}else if(!usuario || !contrasena){
    console.log("Por favor, ingrese su usuario y contraseña.");


}else if(!usuario != VALID_USER || !contrasena != VALID_PASSWORD){
    console.log("Usuario o contraseña incorrectos.");


}else if(isBlocked){
    console.log("Usuario bloqueado.");
}
