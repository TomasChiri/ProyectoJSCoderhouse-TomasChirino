/*
    ---DESARROLLO---
*/
avisoImportante();

verificarExistenciaUsuario();

perfilLink.addEventListener("click", ingresoUsuario)

btnPeliculas.addEventListener("click", () => {
    compraExiste = verPeliculas(peliculas);

    //Utilizo el operador AND donde si existe compraExiste se podra realizar la compra de entradas
    compraExiste && comprarEntradas(peliculas);
});