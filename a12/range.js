let n = Number(prompt("Ingrese un número:"));
let pares = 0;
let impares = 0;
let sumaMultiplos = 0;

for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        console.log("El número es par");
        pares++;
    }else{
        console.log("El número es impar");
        impares++;
    }

    if(i % 3 ===  0){
        sumaMultiplos += i;
    }
}
console.log("Suma de números pares:", pares);
console.log("Suma de números impares:", impares);
console.log("Suma de los múltiplos de 3:", sumaMultiplos);
