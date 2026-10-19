const contact = {
    name: "Marta",
  email: "marta@example.com",
  address: {
    city: "Castellón",
    postalCode: "12001"
  }
}

function showContact(contact){
    const nombre = contact.name ?? ("No disponible");
    const correo = contact.email ?? ("No disponible");
    const direccion = contact.adress?.city ?? ("No disponible"); 
}

// Contacto 2: Sin dirección
const contact2 = {
    name: "Marta",
  email: "marta@example.com"
}

// Contacto 3: Sin email y con address vacío
const contact3 = {
    name: "Marta",
  email: "marta@example.com",
  address: {}
}

showContact(contact);
showContact(contact2);
showContact(contact3);