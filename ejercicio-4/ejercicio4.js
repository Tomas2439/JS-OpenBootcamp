//Cadenas de texto
//Una cadena de texto con tu Nombre
let nombre = 'Tomás Bautista';
//Otra cadena de texto con tu Apellido
let apellido = 'Stutz';
//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + ' '+ apellido;

console.log('Estudiante: ',estudiante);
/*
Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

Otra cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
*/
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

console.log('Mayúsculas: ',estudianteMayus);
console.log('Minúsculas: ', estudianteMinus);
//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cantidadDeLetras = (estudiante).length;

console.log('Cantidad de letras:',estudiante +' = '+ cantidadDeLetras);
/*
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
*/
let primeraLetraNombre = estudiante.charAt(0);

console.log('Primera letra del nombre:', primeraLetraNombre);

let ultimaLetraApellido = apellido.charAt(apellido.length -1)

console.log('Ultima letra del apellido:', ultimaLetraApellido)
// Eliminar los espacios de la variable "estudiante"
let estudianteSinEspacios = estudiante.replace(/\s/g, '');
console.log('Estudiante sin espacios:', estudianteSinEspacios);

// Comprobar si el nombre está contenido en la variable "estudiante"
let nombreP = 'tomas';
let nombreContenido = estudiante.includes(nombre);
console.log('¿El nombre \"tomas\" está contenido en "estudiante"?:', nombreContenido);
