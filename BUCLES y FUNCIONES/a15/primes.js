function isPrime(number){
    if(number < 2) return false;

    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}


function showPrimes(limit){
    console.log("Números primos hasta " + limit + ":");
    for(let n = 2; n <= limit; n++){
        if(isPrime(n)){
            console.log(n);
        }
    }
}
const entrada = Number(prompt("Mostrar números primos hasta el número:"));
showPrimes(entrada);