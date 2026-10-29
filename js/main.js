const peliculas = ["Titanic", "Avatar", "Shrek", "Cars", "Toy Story"];

peliculas.push("Frozen");

peliculas.unshift("El Rey Leon");

const eliminada = peliculas.pop();

console.log("Se ha eliminado la pelicula: " + eliminada);

const buscada = prompt("Ingrese una pelicula");

if (peliculas.includes(buscada)) {
    const posicion = peliculas.indexOf(buscada);

    console.log("La pelicula existe");
    console.log("Se encuentra en la posicion: " + posicion);
} else {
    console.log("La pelicula no existe");
}

peliculas.splice(2, 1, "Intensamente");

function mostrarPeliculas() {
    for (const pelicula of peliculas) {
        console.log("Pelicula: " + pelicula);
    }
}

console.log("Lista de peliculas:");

mostrarPeliculas();