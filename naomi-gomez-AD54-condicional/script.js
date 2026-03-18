//ARRAY DE CONTACTOS
let contactos = [
    {
        name: "Maxwell Wright",
        telephone: "(0191) 719 6495",
        email: "curabltur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        telephone:"0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        telephone: "0800 1111",
        email: "libero@convallis.edu"
    }
];


//prompt para la opción del menú
let option = parseInt(prompt(`Elige una opción del menú:
    1. Mostrar el primer contacto
    2. Mostrar el último contacto
    3. Crear un contacto nuevo`));

//code del switch
switch(option) {
//Mostrar 1er contacto
    case 1:
        if (contactos.length > 0) {
            console.log("PRIMER CONTACTO");
            console.log(contactos[0].name,"/",contactos[0].telephone,"/",contactos[0].email);
        } else {
            console.log("La lista de contactos está vacía");
        }
        break;
//mostrar 2o contacto
    case 2:
        if (contactos.length > 0) {
            //defino el último contacto
            let last = contactos.length -1
            console.log("ÚLTIMO CONTACTO");
            console.log(contactos[last].name,"/",contactos[last].telephone,"/",contactos[last].email);
        } else {
            console.log("La lista de contactos está vacía");
        }
        break;
//mostrar 3er contacto
    case 3:
        let newName = prompt("Introduce el nombre del nuevo contacto:");
        let newPhone = prompt("Introduce el teléfono del nuevo contacto:");
        let newEmail = prompt("Introduce el email del nuevo contacto:");

//condición
        if (newName && newPhone && newEmail) {
// Creamos el contacto nuevo con los datos del user
        let newContact = {
         name: newName,
         telephone: newPhone,
         email: newEmail
        };
        contactos.push(newContact);
        alert("ÚLTIMO CONTACTO:     " + contactos[last].name + " / " + contactos[last].telephone + " / " + contactos[last].email);
        } else {
            alert("No dejes campos vacíos. Inténtalo de nuevo")
        }
        break;
//mensaje default
    default:
        alert("Opción errónea. Recargue la página");
        break;
}


//switch
/*
EJEMPLO DE SWITCH (SE COMPORTA COMO TRIANGULO)

let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion);


La sentencia switch establece que vamos a realizar múltiples condiciones analizando la variable nota.
Cada condición se establece mediante un case, seguido del valor posible de cada caso.
El switch comienza evaluando el primer case, y continua con el resto, hacia abajo.
Observa que algunos case tienen un break. Esto hace que deje de evaluar y se salga del switch.
Los case que no tienen break, no se interrumpen, sino que se salta al siguiente case.
El caso especial default es como un else. Si no entra en ninguno de los anteriores, entra en default.
*/


//ejercicio anterior
/*
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
*/

//Parseint
/*
¿Qué es parseInt en JavaScript?
Es una función de JavaScript que se utiliza para convertir (o parsear) un argumento de tipo cadena en un número entero de una base especificada. Debes tener presente que esta función es de alto nivel y no está asociada a ningún objeto en particular. Además, es extremadamente útil cuando necesitas manejar datos numéricos que inicialmente se presentan como texto.

Sintaxis
Un punto a favor es que su sintaxis es bastante sencilla:

parseInt(string, base);
Parámetros
string: Una cadena que representa el valor que deseas convertir.
base: Un entero que representa la base de la cadena mencionada. Por ejemplo, 10 para decimal, 16 para hexadecimal, etc.
*/

//Naomi G. Gómez Caballero. Todos los derechos reservados. 2026