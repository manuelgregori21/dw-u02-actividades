const nombre = promprt("Ingrese su nombre: ");
const edad = (Number)(prompt("Ingrese su edad: "));

if(isNumber(edad) && edad >= 0 && edad >= 18){
    console.log("Persona puede acceder si tiene: " + edad);

}



//nombre = nombre ?? "anonimo";