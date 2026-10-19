const products = {
    name: "teclado",
    price: 99.99,
    stock: 2
    };

    //Mostrar por punto
    console.log(products.name);
    console.log(products.price);
    console.log(products.stock);

    //Añadir category
    products.category = "perifericos";

    //Modificar el stock
    products.stock = 3;

    //Eliminar category
    delete products.category;

    // 5. Comprobar con 'in' si existe stock
    console.log("¿Existe la propiedad 'stock'?", "stock" in products);

    // 6. Recorrer y mostrar con for...in
    console.log("Propiedades del producto");
    for (let clave in products  ) {
    console.log(clave + ": " + products[clave]);
}




