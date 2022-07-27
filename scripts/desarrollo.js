/*
    ---DESARROLLO---
*/
verificarExistenciaUsuario();

perfilLink.addEventListener("click", ingresoUsuario)

btnPeliculas.addEventListener("click", () => {
    compraExiste = verPeliculas(peliculas);

    if(compraExiste){
        comprarEntradas(peliculas);
    }
});