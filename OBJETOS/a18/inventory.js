const inventory = {
    monitor: 8,
    keyboard: 15,
    mouse: 20
};

function countTotl(obj){
    let total = 0;
    for(let product in object){
        total += obj[product];
    }
    return total;
}

//Crear copia con OBJECT.ASSIGN
const copyInventory = Object.assign({}, inventory);

//Crear copia con SPREAD 
const branchInventory = { ...inventory };
branchInventory.monitor = 0;

console.log("Inventario original (monitores):", inventory.monitor); // Sigue siendo 8
console.log("Inventario copia (monitores):", branchInventory.monitor); // Es 0