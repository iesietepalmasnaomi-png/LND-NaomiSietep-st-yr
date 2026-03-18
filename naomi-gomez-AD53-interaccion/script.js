// Contactos ya guardados de antes
let contactos = [
    {
        name: "Maxwell Wright",
        telephone: "(0191) 719 6495",
        email: "curabltur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        telephone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        telephone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

// Pedimos al user los datos del nuevo contacto
let newName = prompt("Introduce el nombre del nuevo contacto:");
let newPhone = prompt("Introduce el teléfono del nuevo contacto:");
let newEmail = prompt("Introduce el email del nuevo contacto:");

// Creamos el contacto nuevo con los datos del user
let newContact = {
    name: newName,
    telephone: newPhone,
    email: newEmail
};

// Lo metemos al final de los guardados del vectorcito
contactos.push(newContact);

// Definimos el último contacto con -1 igual que antes
let last = contactos.length - 1;

// Le mostramos al usuario el primer contacto en un pop-up (a ver si no lo cierra antes de leerlo como hacen muchos que le dan a la x y ya)
alert( "PRIMER CONTACTO:   " + contactos[0].name + " / " + contactos[0].telephone + " / " + contactos[0].email);

// Ahora el contacto que ya metió el usuario, que quedó el último por el .push
alert("ÚLTIMO CONTACTO:     " + contactos[last].name + " / " + contactos[last].telephone + " / " + contactos[last].email);

//------
//Muestra en consola el array de contactos una vez se haya introducido el nuevo usuario.
console.log("CONTACTOS GUARDADOS PARA PREGUNTILLA");
console.log(contactos);

//¿Qué sucede con el último contacto si recargas la página?
//Se borra a no ser que le hayas puesto un localStorage. La página sólo guarda los datos mientras está cargada. Si la cierras o recargas, se borra y se queda "limpio". localStorage guarda esos datos del navegador para que no desaparezcan
//---------------------------------------------------------------------------------------

//Naomi Gómez. Todos los derechos reservados

//P.D.: Profe no lo sabía, se le pueden poner mascotas al Visual Studio. Vale la pena 100%