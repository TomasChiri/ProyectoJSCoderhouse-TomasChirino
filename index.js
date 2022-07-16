/*
---Clases y Arreglos---
*/
class Pelicula{
    constructor(nombre, edadMinima, sinopsis, id){
        this.nombre = nombre;
        this.edadMinima = edadMinima;
        this.sinopsis = sinopsis;
        this.id = id;
    }
}

let peliculas = [];
peliculas.push(new Pelicula("Batman", 13, "Batman sale a la calle a pegar piñas.", "idbat"));
peliculas.push(new Pelicula("Minions", 0, "Los minions vuelven por decimocuarta vez.", "idmin"));
peliculas.push(new Pelicula("Duro de Matar 8", 18, "Tiros y mucha sangre.", "iddur"));

/*
    ---VARIABLES--
*/
const PRECIOENTRADA = 800, DESCUENTO = 0.35;
let totalEntrada, entradasNombre, entradasCantidad, codigoDescuento;
let compraExiste;
let btnPeliculas = document.getElementById("peliculas");
let cartelera = document.getElementById("cartelera");
let mensajeEntradas = document.getElementById("mensaje");

/*
---FUNCIONES---
*/
//verifica si la entrada es un numero y si es mayor a 0
function verificarEntradas(entradas){
    
    while(isNaN(entradas) || entradas <= 0){
        entradas = parseInt(prompt("Por favor ingrese un número de entradas válido."));
    }

    return entradas;
}

//Crea una lista de las peliculas en el arreglo junto con un boton para comprar entradas
function verPeliculas(peliculas){
    for(const pelicula of peliculas){
        let li = document.createElement("li");
        let btn = document.createElement("button");
        btn.setAttribute("id", pelicula.id);
        li.innerHTML = `<h3>Nombre: ${pelicula.nombre}</h3>
                        <p>Para mayores de: ${pelicula.edadMinima}</p>     
                        <p>Sinopsis: ${pelicula.sinopsis}</p>`;
        btn.innerHTML = "Comprar entradas";
        cartelera.append(li);
        cartelera.append(btn);
    }
    
    return true;
}

//itera las peliculas que existen en la cartelera y realiza la compra de entradas
function comprarEntradas(peliculas){
    for(const pelicula of peliculas){
        let btnEntradas = document.getElementById(pelicula.id);

        btnEntradas.addEventListener("click", () => {
            entradasCantidad = parseInt(prompt(`¿Cuántas entradas va a comprar? (El precio es de ${PRECIOENTRADA} pesos por entrada)`));
            entradasCantidad = verificarEntradas(entradasCantidad);
            totalEntrada = entradasCantidad * PRECIOENTRADA;
            entradasNombre = pelicula.nombre;

            codigoDescuento = prompt("Si tiene un código de descuento ingreselo. (Pista: es 123)");                
            //Aplico el descuento si ingresó el codigo correcto
            if(codigoDescuento === "123"){
                alert("Descuento del 35% aplicado correctamente");
                totalEntrada = aplicarDescuento(totalEntrada);
            }

            //Notifico la cantidad de entradas y cuanto pagó
            if(entradasCantidad === 1){
                mensajeEntradas.innerHTML = `Compraste ${entradasCantidad} entrada para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`;
                mensajeEntradas.className = "comprado";
            }else{
                mensajeEntradas.innerHTML = `Compraste ${entradasCantidad} entradas para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`;
                mensajeEntradas.className = "comprado";
            }
        })
    }
}

//Aplica el descuento al total de entradas segun la constante
function aplicarDescuento(totalEntrada){
    let resultado = totalEntrada - (totalEntrada * DESCUENTO);
    return resultado;
}


/*
    ---DESARROLLO---
*/
btnPeliculas.addEventListener("click", () => {
    compraExiste = verPeliculas(peliculas);

    if(compraExiste){
        comprarEntradas(peliculas);
    }
});









