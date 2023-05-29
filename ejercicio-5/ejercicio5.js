// Crea un archivo JS qucontenga las siguientes líneas

let altura = 187; // altura en centimetros
let peso = 110.240; //peso en float
let alturaMetros = altura/100; //centimetros -> metros 
let alturaRedondeada = Math.ceil(alturaMetros);
let pesoKilogramos = peso;
let pesoRedondeado = Math.floor(pesoKilogramos);
let esIgual = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
// - Una variable que contenga tu altura en centímetros (entero)

console.log("Altura en centímetros:", altura);

// - Una variable que contenga tu altura en metros (número de coma flotante)

console.log("Altura en metros:", alturaMetros);

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

console.log("Peso en kilogramos:", pesoKilogramos);

// - Una variable que contenga tu altura en metros redondeada hacia arriba
console.log("Altura redondeada:", alturaRedondeada);
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log("Peso redondeado:", pesoRedondeado);
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
console.log("¿(Number.MAX_VALUE + 1) es igual a Number.MAX_VALUE?", esIgual);