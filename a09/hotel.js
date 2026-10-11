let nombre = prompt("Ingrese su nombre: ");
let edad = Number(prompt("Ingrese su edad: "));
let numeroCoches = Number(prompt("Ingrese el número de coches que posee: "));
let tipoHabitacion = prompt("Ingrese el tipo de habitación que desea (standard o superior): ");
let estancias = Number(prompt("Ingrese el número de estancias que desea reservar: "));

const standard = 60;
const superior = 90;
const descuento = 0.10;


//Validar que los números sean correctos
if (isNaN(edad) || edad < 0 || isNaN(noches) || noches <= 0) {
  console.log("Error: La edad o el número de noches no son válidos.");
} 
else if (edad < 18) {
  console.log("No puede realizar la reserva por ser menor de 18 años.");
} 
else if (tipoHabitacion !== "standard" && tipoHabitacion !== "superior") {
  console.log("Error: Solo se admiten habitaciones 'standard' o 'superior'.");
} 
else {
  let precioNoche = 0;
  if (tipoHabitacion === "standard") {
    precioNoche = standard;
  } else {
    precioNoche = superior;
  }

  // Calculamos el precio inicial
  let precioInicial = precioNoche * noches;

  // Calculamos el descuento 
  let importeDescuento = 0;
  if (noches >= 7) {
    importeDescuento = precioInicial * descuento;
  }

  // Precio final restando el descuento
  let precioFinal = precioInicial - importeDescuento;

  //resultado
  console.log("Reserva a nombre de: " + nombre);
  console.log("Precio inicial: " + precioInicial.toFixed(2) + "€");
  console.log("Importe del descuento: " + importeDescuento.toFixed(2) + "€");
  console.log("Precio final a pagar: " + precioFinal.toFixed(2) + "€");
}