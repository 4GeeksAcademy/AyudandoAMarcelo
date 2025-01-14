/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

// En el ejercicio tenemos que generar una excusa a través de estas cuatro varibales, seleccionando
// aleatoriamente un elemento de cada una de ellas y concatenando este elemento.

// 1er paso ==> Conseguir extraer un elemento aleatorio de 1 array
// 2o  paso ==> Concatenar los elementos aleatorios del array
// 3er paso ==> Renderizar esta excusa en el HTML

// Vamos a crear una función que dado un array me devuelva un elemento aleatorio de ese array.
function getRandomElement(array) {
  // Generamos un número entero aleatorio entre 0 y la longitud del array
  let randomIndex = Math.floor(Math.random() * array.length);
  // Math.random() Genera un número decimal aleatorio entre 0 y 1 (Sin tocar NUNCA 1)
  // (Math.random() * array.length) ==> Genera un número decimal aleatorio entre 0 y la longitud del array (Sin tocar la longitud del array)
  // Math.floor(Math.random() * array.length) ==> Genera un número entero aleatorio entre 0 y la longitud del array (Sin tocar nunca la longitud del array)

  return array[randomIndex];
}

const excuse =
  getRandomElement(who) +
  " " +
  getRandomElement(action) +
  " " +
  getRandomElement(what) +
  " " +
  getRandomElement(when);

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = excuse;
  // document ==> EN EL HTML
  // getElementbyId("excuse") ==> Busca la etiqueta HTML que tiene el id excuse
  // innerHTML ==> Cambia el contenido de la etiqueta HTML

  // Los puntos son como si dijeras "y"
};
