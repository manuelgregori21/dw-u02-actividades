const input = prompt("Introduce un número entero positivo:");
const num = Number(input);

if (!Number.isInteger(num) || num <= 0) {
  console.log("Error: Debes introducir un número entero positivo mayor que 0.");
} else {

  let contador = num;
  while (contador >= 0) {
    console.log(contador);
    contador--;
  }

  console.log("¡Despegue!");


  
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
  console.log("¡Despegue!");
}

