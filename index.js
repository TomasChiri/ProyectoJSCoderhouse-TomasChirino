/*
    ---FUNCIONES---
*/
function menu(){
    let respuesta = parseInt(prompt("Ingrese el numero correspondiente para seleccionar una opcion: \r\n1. Ver peliculas en cartelera. \r\n2. Comprar entradas \r\n0. Salir"));

    while(isNaN(respuesta) || respuesta < 0 || respuesta >= 3){
                respuesta = parseInt(prompt("Por favor ingrese un número válido."));
    }
    
    return respuesta;
}

function verPeliculas(){
    peliculas.forEach(pelicula => alert(`Pelicula: ${pelicula.nombre}\r\nPara mayores de: ${pelicula.edadMinima} \r\nDescripción: ${pelicula.sinopsis}`));
}

function verificarPelicula(){
    let peliculaExiste;

    if(!(peliculas.some(pelicula => pelicula.nombre.toLowerCase() == entradasNombre.toLowerCase()))){
        alert("No existe pelicula con ese nombre");
        return peliculaExiste = false;
    }

    return peliculaExiste = true;
}
function verificarEntradas(entradas){
    
    while(isNaN(entradas) || entradas <= 0){
        entradas = parseInt(prompt("Por favor ingrese un número de entradas válido."));
    }

    return entradas;
}

function aplicarDescuento(totalEntrada){
    let resultado = totalEntrada - (totalEntrada * DESCUENTO);
    return resultado;
}

/*
    ---VARIABLES--
*/
const peliculas = [
    {nombre: "Batman", edadMinima: 13, sinopsis: "Batman sale a la calle a pegar piñas."},
    {nombre: "Minions", edadMinima: 0, sinopsis: "Los minions vuelven por decimocuarta vez."},
    {nombre: "Duro de Matar 8", edadMinima: 18, sinopsis: "Tiros y mucha sangre."}
]
const PRECIOENTRADA = 800, DESCUENTO = 0.35;
let respuesta, totalEntrada, entradasNombre, entradasCantidad, peliculaExiste, codigoDescuento;

/*
    ---DESARROLLO---
*/
alert("Bienvenid@ a Hoyts Trucho donde puede ver las peliculas en cartelera y comprar sus entradas");
do{
    respuesta = menu();

    switch(respuesta){
        case 1:
            verPeliculas();
            break;
        case 2:
            entradasNombre = prompt("Ingrese el nombre de la pelicula que quiere ver:");
            peliculaExiste = verificarPelicula();

            //Si la pelicula existe realizo la compra de entradas
            if(peliculaExiste){
                entradasCantidad = parseInt(prompt("¿Cuántas entradas va a comprar? (El precio es de 800 pesos por entrada)"));
                entradasCantidad = verificarEntradas(entradasCantidad);
                totalEntrada = entradasCantidad * PRECIOENTRADA;
                codigoDescuento = prompt("Si tiene un código de descuento ingreselo. (Pista: es 123)");
                
                //Aplico el descuento si ingresó el codigo correcto
                if(codigoDescuento === "123"){
                    alert("Descuento del 35% aplicado correctamente");
                    totalEntrada = aplicarDescuento(totalEntrada);
                }

                //Notifico la cantidad de entradas y cuanto pagó
                if(entradasCantidad === 1){
                    alert(`Compraste ${entradasCantidad} entrada para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`);
                }else{
                    alert(`Compraste ${entradasCantidad} entradas para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`);
                }
            }
            break;
        default:
            break;
    }

}while(respuesta != 0)

alert("Gracias por visitarnos!\r\nQue tenga un buen día!");








