// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables

let amigos = [];
let inputNombre = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

// Funciones
function agregarAmigo() {
    let nombre = inputNombre.value;

    if (nombre != ''){
        amigos.push(nombre);
        console.log(amigos)
        inputNombre.value = '';
        updateFriendList();
    } else{
        alert('Por favor, inserte un nombre.');
    }
} 

function updateFriendList() {
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length ; i++){
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo)
    }
}

function sortearAmigo() {
    

    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        let nombre = amigos[indice];
        lista.innerHTML = '';
        resultado.textContent = `El amigo secreto sorteado es: ${nombre}! 🎉`;
    } else {
        alert('No se ha ingresado ningún nombre, por favor ingresa al menos un nombre.')
    }
}
