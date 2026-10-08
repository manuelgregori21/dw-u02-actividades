let nombre = prompt("Ingrese su nombre: ");
let edad = Number(prompt("Ingrese su edad: "));
let numeroCoches = Number(prompt("Ingrese el número de coches que posee: "));
let tipoHabitacion = prompt("Ingrese el tipo de habitación que desea (standard o superior): ");
let estancias = Number(prompt("Ingrese el número de estancias que desea reservar: "));

const standard = 60;
const superior = 90;
const descuento = 0.10;


if(edad < 18){
    console.log("No puede realizar la reeserva");   
}else if (tipoHabitacion === "standard"){
    console.log("El precio de la habitación es: " + standard + "€");
}else if (tipoHabitacion === "superior"){
    console.log("El precio de la habitación es: " + superior + "€");
}