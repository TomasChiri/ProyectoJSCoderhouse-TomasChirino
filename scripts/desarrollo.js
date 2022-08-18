/*
    ---DESARROLLO---
*/
avisoImportante();

verificarExistenciaUsuario();

perfilLink.addEventListener("click", ingresoUsuario)

btnPeliculas.addEventListener("click", () => {
    compraExiste = traerPeliculas();

    //Utilizo el operador AND donde si existe compraExiste se podra realizar la compra de entradas
    compraExiste && comprareEntradas();   
});