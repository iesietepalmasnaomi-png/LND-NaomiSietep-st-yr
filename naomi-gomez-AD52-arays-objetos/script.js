//array de contactos

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

//empujamos al final un nuevo contacto
contactos.push(
    {
        name: "Maisie Haley",
        telephone: "913 531 303",
        email: "risus.Quisque@urna.ca"
    }
);

//defino el último contacto
let last = contactos.length -1

// Muestro el primer y último contacto
console.log("PRIMER CONTACTO");
console.log(contactos[0].name,"/",contactos[0].telephone,"/",contactos[0].email);

console.log("ÚLTIMO CONTACTO");
console.log(contactos[last].name,"/",contactos[last].telephone,"/",contactos[last].email);

//Actividad opcional
contactos[1].telephone = "928 123 456";
console.log(contactos[1])

//---------------------------------
//PREGUNTAS

//1)pruebo debajo
console.log(contactos[10])
//nos indica que está indefinido

//2) Porque si un array tiene 4 valores (lenght = 4), las posiciones serán del 0 al 3. Por ende, la última posición del array es 3 ( 4-1 = 3; por lo que lenght-1 = 3)

//3) Podemos usar pop para eliminar el último elemento del array o shift para eliminar la posición 0

let fueraMaxwell = contactos.shift();
console.log(fueraMaxwell)
console.log(contactos)

//---------------------



//Hecho por Naomi Gómez. No copiar
