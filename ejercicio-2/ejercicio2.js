/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

tu nombre = string
tu edad = number
si soy desarrollador = booleano
fecha de nacimiento = date
libro favorito = objeto(titulo, autor, fecha y url)
*/
const nombre = "Tomás Bautista";
const edad = 24;
const developer = true; //Soy desarrollador web. Linkedin: https://www.linkedin.com/in/tomas-stutz/.
const nacimiento = new Date("september 24 1999");
const book = {
    titulo: "Juan Bautista Alberdi, Pilar del progreso Argentino",
    autor: "Alejandro Gómez",
    fecha: 2015,
    url: "https://libroslibertarios.com.ar/productos/juan-bautista-alberdi-pilar-del-progreso-argentino/",
}

const lista = [nombre,edad,developer,book];

console.log(lista);