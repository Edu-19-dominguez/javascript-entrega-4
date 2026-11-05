const peliculas = ["Titanic", "Avatar", "Shrek", "Cars", "Toy Story"];

function mostrarPeliculas() {
    for (const pelicula of peliculas) {
        console.log("Película: " + pelicula);
    }
}

let opcion = "";

while (opcion != "7") {

    opcion = prompt(
        "1- Agregar al final\n" +
        "2- Agregar al inicio\n" +
        "3- Eliminar última película\n" +
        "4- Buscar película\n" +
        "5- Reemplazar película\n" +
        "6- Mostrar películas\n" +
        "7- Salir"
    );

    if (opcion == "1") {

        let pelicula = prompt("Ingrese una película:");
        peliculas.push(pelicula);

    } else if (opcion == "2") {

        let pelicula = prompt("Ingrese una película:");
        peliculas.unshift(pelicula);

    } else if (opcion == "3") {

        let eliminada = peliculas.pop();
        console.log("Se ha eliminado la película: " + eliminada);

    } else if (opcion == "4") {

        let buscada = prompt("Ingrese una película:");

        if (peliculas.includes(buscada)) {

            console.log("La película existe.");
            console.log("Posición: " + peliculas.indexOf(buscada));

        } else {

            console.log("La película no existe.");

        }

    } else if (opcion == "5") {

        let indice = Number(prompt("Ingrese el índice:"));
        let nuevaPelicula = prompt("Ingrese la nueva película:");

        peliculas.splice(indice, 1, nuevaPelicula);

    } else if (opcion == "6") {

        mostrarPeliculas();

    }

}

console.log("Fin del catalogo de peliculas.");