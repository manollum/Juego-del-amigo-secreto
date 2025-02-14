// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para guardar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtenemos el input
    let lista = document.getElementById("listaAmigos"); // Obtenemos la lista UL

    let nombre = input.value.trim(); // Quitamos espacios en blanco

    if (nombre !== "") {
        amigos.push(nombre); // Guardamos el nombre en el array

        let nuevoAmigo = document.createElement("li"); // Creamos el <li>
        nuevoAmigo.textContent = nombre; // Le asignamos el texto del input
        lista.appendChild(nuevoAmigo); // Agregamos el <li> a la lista

        input.value = ""; // Limpiar el input después de agregar
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado"); // Lista para mostrar resultado
    resultado.innerHTML = ""; // Limpiamos el resultado anterior

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * amigos.length); // Número aleatorio
    let ganador = amigos[indiceGanador]; // Nombre del ganador

    let resultadoItem = document.createElement("li"); // Creamos un <li> para el resultado
    resultadoItem.textContent = "🎉 El amigo secreto es: " + ganador + " 🎉";
    resultado.appendChild(resultadoItem);
}