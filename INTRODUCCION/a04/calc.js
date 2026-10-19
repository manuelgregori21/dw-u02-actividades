let a = 2;
let b = 4;

//sumar
let c = a + b;
console.log("Suma: " + c);

//restar
let d = a - b;
console.log("Resta: " + d);

//multiplicar
let e = a * b;
console.log("Multiplicación: " + e);

//dividir
let f = a / b;
console.log("División: " + f);


//el resto
if(b != 0){
    let g = a % b;
console.log("Resto: " + g);

}else{
    console.log("No se puede dividir entre 0");
}


//Condicion cual es mayor o menor 
if (a > b) {
    console.log("El número mayor es: " + a);
}else if (b < a) {
    console.log("El número mayor es: " + b);
}else{
    console.log("Los números son iguales");
}

//Condicion si numero es par o impar 
if(a % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}


if(b % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");  
}



