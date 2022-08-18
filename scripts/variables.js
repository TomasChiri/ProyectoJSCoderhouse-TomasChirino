/*
---Clases y Arreglos---
*/
class PeliculaHP{
    constructor(nombre, edadMinima, sinopsis, id){
        this.nombre = nombre;
        this.edadMinima = edadMinima;
        this.sinopsis = sinopsis;
        this.id = id;
    }
}

let peliculasHarry = [];
peliculasHarry.push(new PeliculaHP("Harry Potter y la Piedra Filosofal", 0, "El día en que cumple once años, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Deberá acudir entonces a una famosa escuela de magia y hechicería: Hogwarts.", "idhp1"));
peliculasHarry.push(new PeliculaHP("Harry Potter y la Cámara Secreta", 0, "Terminado el verano, Harry no ve la hora de abandonar la casa de sus odiosos tíos. Inesperadamente se presenta en su dormitorio Dobby, un elfo doméstico, que le anuncia que correrá un gran peligro si vuelve a Hogwarts.", "idhp2"));
peliculasHarry.push(new PeliculaHP("Harry Potter y el Prisionero de Azkaban", 13, "El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión para magos de Azkaban. Se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.", "idhp3"));
peliculasHarry.push(new PeliculaHP("Harry Potter y el Caliz de Fuego", 13, "Tras las evidencias de que Voldemort ha regresado, Harry se verá envuelto en el tradicional Torneo de los Tres Magos. Con ayuda de Ron y Hermione, se preparará para competir en una nueva lucha que él no ha elegido.", "idhp4"));
peliculasHarry.push(new PeliculaHP("Harry Potter y la Orden del Fénix", 13, "Cuando la ignorancia de una nueva profesora deja a Hogwarts sin la preparación suficiente para luchar contra el demonio, Harry le enseña a un pequeño grupo de estudiantes a defenderse en contra de las artes oscuras.", "idhp5"));
peliculasHarry.push(new PeliculaHP("Harry Potter y el Misterio del Príncipe", 13, "Sexta entrega de la saga del joven mago, en la que Harry descubre un poderoso libro y, mientras trata de descubrir sus orígenes, colabora con Dumbledore en la búsqueda de una serie de objetos mágicos que ayudarán en la destrucción de Lord Voldemort.", "idhp6"));
peliculasHarry.push(new PeliculaHP("Harry Potter y las Reliquias de la Muerte Parte 1", 13, "Harry, Ron y Hermione dejan Hogwarts para seguir con su misión de destruir los Horcruxes, el secreto del poder y la inmortalidad de Voldemort.", "idhp7"));
peliculasHarry.push(new PeliculaHP("Harry Potter y las Reliquias de la Muerte Parte 2", 13, "La batalla entre las fuerzas del bien y del mal del mundo mágico se convierte en una guerra que no deja a nadie indiferente. Harry Potter es quien tiene que hacer el último sacrificio antes de enfrentarse al malvado Voldemort.", "idhp8"));

/*
    ---VARIABLES--
*/
const PRECIOENTRADA = 800, DESCUENTO = 0.35;
let totalEntrada, entradasNombre, entradasCantidad, codigoDescuento, compraExiste, harryExiste;
let musicaHarry = new Audio("audio/Hedwig's_Theme.mp3");
let perfil = document.getElementById("perfil");
let perfilLink = document.getElementById("perfilLink");
let ingreso = document.getElementById("ingreso");
let formularioIngreso = document.getElementById("formularioIngreso");
let btnPeliculas = document.getElementById("peliculas");
let cartelera = document.getElementById("cartelera");
let comprar = document.getElementById("compra");
let formularioCompras = document.getElementById("formularioCompras");
let containerHarry = document.getElementById("harry");