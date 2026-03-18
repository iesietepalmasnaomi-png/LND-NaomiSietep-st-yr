// Array de datos para los equipos
let systems = [
    {
        nombreHost: "PC-ADMIN-01",
        direccionIP: "192.168.1.15",
        sistemaOperativo: "Ubuntu Numbat"
    },
     {
        nombreHost: "SVR-WEB-01",
        direccionIP: "192.168.0.100",
        sistemaOperativo: "Ubuntu Server"
    },
      {
        nombreHost: "PC-VENTAS-01",
        direccionIP: "192.168.20.35",
        sistemaOperativo: "Windows 11"
    },
      {
        nombreHost: "SVR-DNS-01",
        direccionIP: "192.168.5.100",
        sistemaOperativo: "Windows Server"
    }
];

// Pedimos al user los datos del nuevo equipo
let newHost = prompt("Introduce el nombre del host del nuevo equipo:");
let newIP = prompt("Introduce la IP del nuevo equipo:");
let newOS = prompt("Introduce el S.O. del nuevo equipo:");

// Creamos el equipo nuevo con los datos del user
let newSystem = {
      nombreHost: newHost,
      direccionIP: newIP,
      sistemaOperativo: newOS
};

// Lo metemos al final de los guardados del vectorcito
systems.push(newSystem);

// Le mostramos al usuario el segundo equipo
console.log("SEGUNDO EQUIPO:   " + systems[1].nombreHost + " / " + systems[1].direccionIP + " / " + systems[1].sistemaOperativo);
