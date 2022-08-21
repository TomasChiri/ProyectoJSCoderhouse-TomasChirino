/*
---FUNCIONES---
*/
//Contiene un alert importante que se ejecutara al iniciar la pagina
function avisoImportante(){
    Swal.fire({
        title: 'IMPORTANTE',
        text: 'La película DOCTOR STRANGE 2 contiene varias escenas con luces intermitentes que pueden afectar a personas susceptibles a la epilepsia fotosensible o a padecer otras foto-sensibilidades.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

//Verifica si el usuario ya se encuentra dentro del sessionStorage al iniciar la pagina y lo escribe en el header
function verificarExistenciaUsuario(){
    let usuarioStorage = sessionStorage.getItem("usuario");

    if(usuarioStorage){
        perfil.innerHTML = `<p class="header__sesion">Bienvenid@ ${usuarioStorage}</p>`;
        return true;
    }

    return false;
}

//registro del usuario que se almacenará en el localStorage
function registroUsuario(){
    //agrego un evento al link del registro para que se abra la ventana de registro de usuario
    btnRegistro.addEventListener("click", (e) => {
        e.preventDefault();

        ingreso.className = "none";
        registro.className = "registro";

        formularioRegistro.addEventListener("submit", (e) => {
            e.preventDefault()
            //aplico los inputs como nombre de usuario, contraseña e email y los envio al localStorage
            let usuario = e.target.children[0].children[0].value;
            let contraseña = e.target.children[1].children[0].value;
            let email = e.target.children[2].children[0].value;

            let persona = {nombre: usuario, contraseña:contraseña, email:email};
            localStorage.setItem("persona", JSON.stringify(persona));

            //confirmo a través de un alert que se registró el usuario
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Usuario creado con exito',
                showConfirmButton: false,
                timer: 1500
            })

            //al finalizar el registro vuelvo al menu de inicio de sesion
            ingreso.className = "ingreso";
            registro.className = "none";

        })
    })
}

//Ingreso de sesion para el usuario al presionar el link del header
function ingresoUsuario(){
        //agrego la clase ingreso asi aparece el formulario
        ingreso.className = "ingreso";

        formularioIngreso.addEventListener("submit", (e) => {
            e.preventDefault()
            //aplico los inputs como email y contraseña y los comparó con los datos del localStorage
            let email = e.target.children[0].children[0].value;
            let contraseña = e.target.children[1].children[0].value;
    
            let persona = JSON.parse(localStorage.getItem("persona"));

            if(!persona){
                Swal.fire(
                    'Error',
                    'Debes registrar un usuario',
                    'error'
                )
            }else if(email != persona.email){
                Swal.fire(
                    'Email incorrecto',
                    'Intentelo de nuevo.',
                    'error'
                )
            }else if(contraseña != persona.contraseña){
                Swal.fire(
                    'Contraseña incorrecta',
                    'Intentelo de nuevo.',
                    'error'
                )
            }else{
                //si el mail y la contraseña son correctas se realiza el inicio de sesion y se lo mostrará con su nombre en el header
                perfil.innerHTML = `<p class="header__sesion">Bienvenid@ ${persona.nombre}</p>`;
                ingreso.className = "none";

                //guardo el nombre del usuario en el sessionStorage asi seguirá con la sesión iniciada hasta que cierre el navegador
                sessionStorage.setItem("usuario", persona.nombre);
            }
        })

        //ingreso la función de registrar usuario dentro del menu de inicio sesión
        registroUsuario();
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


//Crea una lista de las peliculas en el arreglo de Harry Potter junto con un boton para comprar entradas
function traerPeliculasHP(peliculasHarry){
    containerHarry.innerHTML = "";
    
    let maratonHP = document.getElementById("maratonHP");
    maratonHP.innerHTML=`<h2 class="maratonHP animate__animated animate__fadeIn">Maraton de peliculas de Harry Potter</h2>`

    containerHarry.classList.add("animate__animated");
    containerHarry.classList.add("animate__fadeIn");
    for(const pelicula of peliculasHarry){
        let li = document.createElement("li");
            li.innerHTML = `<img class="poster" src="./imagenes/${pelicula.id}.jpg" alt="poster de ${pelicula.nombre}">
                            <h3 class="titulo tituloHarry">${pelicula.nombre}</h3>                    
                            <p class="edad">Para mayores de: ${pelicula.edadMinima}</p>     
                            <p class="sinopsis">Sinopsis: ${pelicula.sinopsis}</p>
                            <button id=${pelicula.id} class="btn btn-outline-success btnCompra">Comprar entradas</button>`;
        containerHarry.append(li);
    }
    
    return true;
}

//itera las peliculas de Harry Potter y realiza la compra de entradas
function comprarEntradasHP(peliculasHarry){
    for(const pelicula of peliculasHarry){
        let btnEntradasHP = document.getElementById(pelicula.id);

        btnEntradasHP.addEventListener("click", () => {
            //Verifico si el usuario inició sesion y si es así puede comprar entradas
            if(!verificarExistenciaUsuario()){
                Swal.fire(
                    'Error',
                    'Debes iniciar sesion para poder comprar entradas',
                    'error'
                )
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
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: '¡Codigo Aplicado!',
                            text:'¡Tienes un 35% de descuento!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        totalEntrada = aplicarDescuento(totalEntrada);
                        }
                        
                    //Notifico la cantidad de entradas y cuanto pagó
                    if(entradasCantidad === 1){
                        if(codigoDescuento === "123"){
                            setTimeout(function(){
                                Swal.fire(
                                    '¡Listo!',
                                    `Compraste ${entradasCantidad} entrada para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`,
                                    'success'
                            )}, 1500)
                        }else{
                            Swal.fire(
                                '¡Listo!',
                                `Compraste ${entradasCantidad} entrada para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`,
                                'success'
                                )
                        }
                        comprar.className = "none"; 
                    }else{
                        if(codigoDescuento === "123"){
                            setTimeout(function(){
                                Swal.fire(
                                    '¡Listo!',
                                    `Compraste ${entradasCantidad} entradas para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`,
                                    'success'
                            )}, 1500)
                        }else{
                            Swal.fire(
                                '¡Listo!',
                                `Compraste ${entradasCantidad} entradas para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`,
                                'success'
                                )
                        }
                        comprar.className = "none"; 
                    }
                })
            }
        })
    }
}

//Crea una lista de las peliculas en el arreglo junto con un boton para comprar entradas (UTILIZANDO EL FETCH)
async function traerPeliculas() {
    cartelera.innerHTML = "";

    try{
        const response = await fetch('../json/peliculas.json');
        const peliculas = await response.json();

        peliculas.forEach(pelicula => {
            let li = document.createElement("li");
            li.innerHTML = `<img class="poster" src="./imagenes/${pelicula.id}.jpg" alt="poster de ${pelicula.nombre}">
                            <h3 class="titulo">${pelicula.nombre}</h3>                    
                            <p class="edad">Para mayores de: ${pelicula.edadMinima}</p>     
                            <p class="sinopsis">Sinopsis: ${pelicula.sinopsis}</p>
                            <button id=${pelicula.id} class="btn btn-outline-success btnCompra">Comprar entradas</button>`; 
                                         
            cartelera.append(li);
        });

        //Creo un boton donde si se apreta se mostrarán las peliculas de Harry Potter
        containerHarry.innerHTML = `<button type="button" class="btn btn-outline-warning btnHarry" id="btnHarry">Haz Click aqui para una sorpresa magica</button>`;
        let btnHarry = document.getElementById("btnHarry");

        //Agrego las funcionalidades al boton de Harry Potter
        btnHarry.addEventListener("click", ()=>{
            //Inserto la musica cuando se apreta el boton
            musicaHarry.play();

            harryExiste = traerPeliculasHP(peliculasHarry);

            //Utilizo el operador AND donde si existen las peliculas de HP se podra realizar la compra de entradas
            harryExiste && comprarEntradasHP(peliculasHarry);
        });

    }catch(error){
        console.log(error);
    }
}

//itera las peliculas que existen en la cartelera y realiza la compra de entradas (UTILIZANDO EL FETCH)
async function comprareEntradas(){
    try{
        const response = await fetch('../json/peliculas.json');
        const peliculas = await response.json();

        peliculas.forEach(pelicula => {
            let btnEntradas = document.getElementById(pelicula.id);

            btnEntradas.addEventListener("click", () => {
                //Verifico si el usuario inició sesion y si es así puede comprar entradas
                if(!verificarExistenciaUsuario()){
                    Swal.fire(
                        'Error',
                        'Debes iniciar sesion para poder comprar entradas',
                        'error'
                    )
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
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: '¡Codigo Aplicado!',
                                text:'¡Tienes un 35% de descuento!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            totalEntrada = aplicarDescuento(totalEntrada);
                        }
                            
                        //Notifico la cantidad de entradas y cuanto pagó
                        if(entradasCantidad === 1){
                            if(codigoDescuento === "123"){
                                setTimeout(function(){
                                    Swal.fire(
                                        '¡Listo!',
                                        `Compraste ${entradasCantidad} entrada para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`,
                                        'success'
                                )}, 1500)
                            }else{
                                Swal.fire(
                                    '¡Listo!',
                                    `Compraste ${entradasCantidad} entrada para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`,
                                    'success'
                                    )
                            }
                            comprar.className = "none"; 
                        }else{
                            if(codigoDescuento === "123"){
                                setTimeout(function(){
                                    Swal.fire(
                                        '¡Listo!',
                                        `Compraste ${entradasCantidad} entradas para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`,
                                        'success'
                                )}, 1500)
                            }else{
                                Swal.fire(
                                    '¡Listo!',
                                    `Compraste ${entradasCantidad} entradas para ir a ver ${entradasNombre} y pagaste ${totalEntrada} pesos.`,
                                    'success'
                                    )
                            }
                            comprar.className = "none"; 
                        }
                    })
                }
        })
        });
    }catch(error){
        console.log(error);
    }
    
}