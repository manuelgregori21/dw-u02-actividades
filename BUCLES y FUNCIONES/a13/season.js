function getSeason(month) {

if (!month) return null;

  const mesLimpio = month.trim().toLowerCase();

    switch (mesLimpio) {
    case "diciembre":
    case "enero":
    case "febrero":
      return "Invierno";

    case "marzo":
    case "abril":
    case "mayo":
      return "Primavera";

    case "junio":
    case "julio":
    case "agosto":
      return "Verano";

    case "septiembre":
    case "octubre":
    case "noviembre":
      return "Otoño";

    default:
      return null;
  }
}

const mes = prompt("Introduce el nombre de un mes:");
const estacion = getSeason(mes);

if (estacion === null) {
  console.log("El texto introducido no corresponde a un mes válido.");
} else {
  console.log("El mes pertenece a la estación:", estacion);
}


}