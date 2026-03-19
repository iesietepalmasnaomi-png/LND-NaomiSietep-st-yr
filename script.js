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

//Menú de selección. Si la opción es la de salida, se acabará el bucle

let option = 64654;
while (option !== 0) {
    option = parseInt(prompt(`Elige una opción del menú:
        1. Mostrar el primer contacto
        2. Mostrar el último contacto
        3. Mostrar todos los contactos
        4. Crear un contacto nuevo
        0. Salir del menú`));

//Hacemos el menú
    switch(option) {
//Mostrar 1er contacto
    case 0:
        alert("Hasta la próxima");
        break;
    case 1:
        if (contactos.length > 0) {
            alert("PRIMER CONTACTO      " + contactos[0].name + " / " + contactos[0].telephone + " / " + contactos[0].email);
        } else {
            alert("La lista de contactos está vacía");
        }
        break;
//mostrar último contacto
    case 2:
        if (contactos.length > 0) {
            //defino el último contacto
            let last = contactos.length -1
            alert("ÚLTIMO CONTACTO     " + contactos[last].name + " / " + contactos[last].telephone + " / " + contactos[last].email);
        } else {
            alert("La lista de contactos está vacía");
        }
        break;
//mostrar todos los contactos
    case 3: 
    for (let i = 0; i<contactos.length; i++){
        alert("CONTACTO NÚMERO " + i + ":   " + contactos[i].name + " / " + contactos[i].telephone + " / " + contactos[i].email)
    };
    break;
//Crear nuevo contacto
    case 4:
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
        let last = contactos.length -1
        alert("ÚLTIMO CONTACTO:     " + contactos[last].name + " / " + contactos[last].telephone + " / " + contactos[last].email);
        } else {
            alert("No dejes campos vacíos. Inténtalo de nuevo")
        }
        break;
//mensaje default
    default:
        alert("Opción errónea. Inténtalo de nuevo");
        break;
    }
};

//Tarea
/*

3. Nos centramos en la opción “Listar todos los contactos”
En este caso vamos a tener que usar un bucle for para recorrer todos los contactos del array. Se puede resolver de dos maneras:

Usando el bucle for. Para ello deberás crear seguir la siguiente estructura: for (inicialización; condición; incremento). Es decir, primero deberás crear e inicializar una variable que será la que recorra el bucle. Luego debes establecer la condición de parada y finalmente deberás incrementar la variable para que pase a la siguiente iteración. Te deberá quedar algo similar a lo siguiente:


let contacto = 0 es la variable que usaremos para iterar dentro del bucle. Esta, comienza en 0 y aumenta en 1 en cada iteración (contacto++).
La condición contacto < contactos.length asegura que el bucle recorra todo el array.
En cada iteración, se puede acceder a cada elemento con contactos[contacto], ya que [contacto] representaría cada elemento dentro del array. Es decir, en la primera iteración del bucle es como si estuvieramos haciendo contactos[0], en la segunda iteración del bucle contactos[1], en la tercera iteración del bucle contactos[2]; y así sucesivamente hasta llegar a la longitud del array contactos.
Usando el bucle for … of. El bucle for...of en JavaScript se usa para recorrer directamente los valores de un array sin necesidad de usar un índice. Su sintaxis es más simple y clara que un bucle for tradicional.


En este caso, en cada iteración, la variable contacto toma directamente el valor de un elemento del array contactos, evitando la necesidad de acceder con un índice (contactos[contacto]).
*/

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