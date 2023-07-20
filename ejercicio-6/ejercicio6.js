
// Declaración de la variable listaCompra con 5 elementos
let listaCompra = ["Manzanas", "Arroz", "Leche", "Pan", "Queso"];

// Añadir "Aceite de Girasol" a la lista de la compra
listaCompra.push("Aceite de Girasol");

// Eliminar "Aceite de Girasol" de la lista de la compra
listaCompra.splice(listaCompra.indexOf("Aceite de Girasol"), 1);

// Declaración de la lista de películas favoritas
let peliculasFavoritas = [
  { titulo: "Pelicula1", director: "Director1", fecha: "2012-05-15" },
  { titulo: "Pelicula2", director: "Director2", fecha: "2010-11-21" },
  { titulo: "Pelicula3", director: "Director3", fecha: "2015-09-08" }
];

// Filtrar las películas posteriores al 1 de enero de 2010
let peliculasPosteriores = peliculasFavoritas.filter(
  (pelicula) => pelicula.fecha > "2010-01-01"
);

// Obtener una lista de directores de la lista original de películas
let directores = peliculasFavoritas.map((pelicula) => pelicula.director);

// Obtener una lista de títulos de la lista original de películas
let titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);

// Concatenar la lista de directores y la lista de títulos
let directoresTitulos = directores.concat(titulos);

// Concatenar la lista de directores y la lista de títulos utilizando el spread operator
let directoresTitulosSpread = [...directores, ...titulos];





