let precio = Number(prompt("Precio del artículo:"));
let IVA = Number(prompt("Porcentaje de IVA:"));

if (isNaN(precio) || isNaN(IVA) || precio < 0 || IVA < 0) {
  alert("Datos incorrectos: deben ser números positivos");
} else {
  let importeIva = precio * (IVA / 100);
  let total = precio + importeIva;

  alert("IVA: " + importeIva.toFixed(2) + " €");
  alert("Total: " + total.toFixed(2) + " €");
}