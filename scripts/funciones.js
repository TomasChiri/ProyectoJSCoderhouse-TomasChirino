/*
---FUNCIONES---
*/
//Verifica si el usuario ya se encuentra dentro del sessionStorage al iniciar la pagina y lo escribe en el header
function verificarExistenciaUsuario(){
    let usuarioStorage = sessionStorage.getItem("usuario");

    if(usuarioStorage){
        perfil.innerHTML = `<p class="header__sesion">Bienvenid@ ${usuarioStorage}</p>`;
        return true;
    }

    return false;
}

//Ingreso de sesion para el usuario al presionar el link del header
function ingresoUsuario(){
        //agrego la clase ingreso asi aparece el formulario
        ingreso.className = "ingreso";
        formularioIngreso.addEventListener("submit", (e) => {
            e.preventDefault()
            //aplico los inputs como nombre de usuario y contraseña y los envio al sessionStorage
            let usuario = e.target.children[0].children[0].value;
            let contraseña = e.target.children[1].children[0].value;
    
            sessionStorage.setItem("usuario", usuario);
            sessionStorage.setItem("contraseña", contraseña);
    
            //llamo al nombre de usuario y lo escribo dentro del header
            let usuarioStorage = sessionStorage.getItem("usuario");
            perfil.innerHTML = `<p class="header__sesion">Bienvenid@ ${usuarioStorage}</p>`;
    
            //aplico la clase none para que el formulario desaparezca
            ingreso.className = "none";
        })
}

//verifica si la entrada es un numero y si es mayor a 0
function verificarEntradas(entradas){
    
    while(isNaN(entradas) || entradas <= 0){
        entradas = parseInt(prompt("Por favor ingrese un número de entradas válido."));
    }
    
    return entradas;
}

//Aplica el descuento al total de entradas segun la constante
function aplicarDescuento(totalEntrada){
    let resultado = totalEntrada - (totalEntrada * DESCUENTO);
    return resultado;
}

//Crea una lista de las peliculas en el arreglo junto con un boton para comprar entradas
function verPeliculas(peliculas){
    cartelera.innerHTML = "";
    for(const pelicula of peliculas){
        let li = document.createElement("li");
        let btn = document.createElement("button");
        btn.setAttribute("id", pelicula.id);
        li.innerHTML = `<h3>Nombre: ${pelicula.nombre}</h3>
                        <p>Para mayores de: ${pelicula.edadMinima}</p>     
                        <p>Sinopsis: ${pelicula.sinopsis}</p>
                        <img class="poster" src="./imagenes/${pelicula.id}.jpg" alt="poster de ${pelicula.nombre}">`;              
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
            //Verifico si el usuario inició sesion y si es así puede comprar entradas
            if(!verificarExistenciaUsuario()){
                alert("Debes iniciar sesion para poder comprar entradas");
            }else{
                //agrego la clase comprar asi aparece el formulario
                comprar.className = "comprar";
                formularioCompras.addEventListener("submit", (e) => {
                    e.preventDefault();
                    
                    //busco el value del primer y segundo input del formulario que van a ser la cantidad de entradas y el codigo de descuento respectivamente
                    entradasCantidad = e.target.children[0].children[0].value;
                    entradasCantidad = verificarEntradas(entradasCantidad);
                    totalEntrada = entradasCantidad * PRECIOENTRADA;
                    entradasNombre = pelicula.nombre;
    
                    codigoDescuento = e.target.children[1].children[0].value;
                    // //Aplico el descuento si ingresó el codigo correcto
                    if(codigoDescuento === "123"){
                        alert("Descuento del 35% aplicado correctamente");
                        totalEntrada = aplicarDescuento(totalEntrada);
                        }
                        
                    //Notifico la cantidad de entradas y cuanto pagó
                    if(entradasCantidad === 1){
                        mensajeEntradas.innerHTML = `Compraste ${entradasCantidad} entrada para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`;
                        mensajeEntradas.className = "comprado";
                        comprar.className = "none"; 
                    }else{
                        mensajeEntradas.innerHTML = `Compraste ${entradasCantidad} entradas para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`;
                        mensajeEntradas.className = "comprado";
                        comprar.className = "none"; 
                        }
                })
            }
        })
    }
}