function readNumbers(){
let suma = 0;
let cantidad = 0;

while(true){
    const entrada = prompt("Introduce un número (o escribe STOP / deja vacío para terminar):");
    if(entrada === null || entrada === "" || entrada.trim().toUpperCase() === "STOP"){
        break;
    }


    const numero = Number(entrada);
    if(Number.isNaN(numero)){
        alert("Error: Eso no es un número válido. Inténtalo de nuevo.");
        continue;
    }

    suma += numero;
        cantidad++;
}

    return {
    suma: suma,
    cantidad: cantidad
  }
}


const resultado = readNumbers();
console.log("Cantidad de números introducidos:", resultado.cantidad);
console.log("Suma total:", resultado.suma);