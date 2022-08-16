/*
---Clases y Arreglos---
*/
/* class Pelicula{
    constructor(nombre, edadMinima, sinopsis, id){
        this.nombre = nombre;
        this.edadMinima = edadMinima;
        this.sinopsis = sinopsis;
        this.id = id;
    }
} */

/* let peliculas = [];
peliculas.push(new Pelicula("Batman", 13, "Batman sale a la calle a pegar piñas.", "idbat"));
peliculas.push(new Pelicula("Minions", 0, "Los minions vuelven por decimocuarta vez.", "idmin"));
peliculas.push(new Pelicula("Top Gun Maverick", 13, "Tom Cruise se sube a un avion", "idtop"));
peliculas.push(new Pelicula("Thor Love and Thunder", 13, "Thor hace muchos chistes", "idthor"));
peliculas.push(new Pelicula("Jurassic World Dominio", 13, "El final de la saga jurasica", "idjur"));
peliculas.push(new Pelicula("Lightyear", 0, "El inicio de Buzz Lightyear", "idlight"));
peliculas.push(new Pelicula("Alien", 18, "El clasico de horror vuelve al cine", "idali")); */

/*
    ---VARIABLES--
*/
const PRECIOENTRADA = 800, DESCUENTO = 0.35;
let totalEntrada, entradasNombre, entradasCantidad, codigoDescuento, compraExiste;
let perfil = document.getElementById("perfil");
let perfilLink = document.getElementById("perfilLink");
let ingreso = document.getElementById("ingreso");
let formularioIngreso = document.getElementById("formularioIngreso");
let btnPeliculas = document.getElementById("peliculas");
let cartelera = document.getElementById("cartelera");
let comprar = document.getElementById("compra");
let formularioCompras = document.getElementById("formularioCompras");