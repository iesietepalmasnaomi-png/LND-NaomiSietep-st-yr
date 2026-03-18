//variables declaradas
const ROSA_PRECIO = 8;
const LIRIO_PRECIO = 10;
const TULIPAN_PRECIO = 2;
let rosaCantidad = 20;
let lirioCantidad = 30;
let tulipanCantidad = 120;

//variables con operaciones calculadas
let rosaValor = ROSA_PRECIO*rosaCantidad;
let lirioValor = LIRIO_PRECIO*lirioCantidad;
let tulipanValor = TULIPAN_PRECIO*tulipanCantidad;

let totalVentas = rosaValor+tulipanValor+lirioValor;

//textito
console.log("Rosa - precio unitario: ",ROSA_PRECIO,", cantidad: ",rosaCantidad, ", valor total: ", rosaValor);
console.log("Lirio - precio unitario: ",LIRIO_PRECIO,", cantidad: ",lirioCantidad, ", valor total: ", lirioValor);
console.log("Tulipán - precio unitario: ",TULIPAN_PRECIO,", cantidad: ",tulipanCantidad, ", valor total: ", tulipanValor);
console.log("Total:",totalVentas);