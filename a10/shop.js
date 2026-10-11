let cliente = prmpt("Nombre de cliente: ") || "Invitado";
let precio = Number(prompt("Ingrese el precio del producto: "));
let cantidad = Number(prompt("Ingrese la cantidad de productos: "));
let codigo = prompt("Ingrese el código de descuento (JS10 / JS20): ");

let subtotal = precio * cantidad;
let ahorro = subtotal * 0.10;
let total = subtotal - ahorro;

if(isNaN(precio) || precio < 0 || isNaN(cantidad) || cantidad <= 0) {
  console.log("Error: El precio o la cantidad no son válidos.");
}

if(codigo === "JS10") {
  ahorro = subtotal * 0.10;
} else if(codigo === "JS20") {
  ahorro = subtotal * 0.20;
}

console.log("Cliente: " + cliente);
console.log("Precio: " + precio + " €");
console.log("Cantidad: " + cantidad);
console.log("Subtotal: " + subtotal + " €");
console.log("Descuento: " + porcDescuento + " %");
console.log("Ahorro: " + ahorro + " €");
console.log("TOTAL: " + total + " €");