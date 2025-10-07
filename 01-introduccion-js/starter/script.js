// -------------------------
// Variables y tipos
// -------------------------
const nombre = 'Federico';
let edad = 25;
var esAyudante = true; // evitar var en código moderno, pero mostrar para historia


console.log('Nombre:', nombre);
console.log('Edad:', edad);
console.log('Es ayudante:', esAyudante);


// -------------------------
// Operadores
// -------------------------
const a = 10;
const b = 3;
console.log('Suma:', a + b);
console.log('Resto:', a % b);
console.log('Comparación estricta:', a === Number('10'));


// -------------------------
// Arrays
// -------------------------
const comidas = ['pizza', 'empanada', 'asado'];
console.log('Primera comida:', comidas[0]);
comidas.push('helado');
console.log('Comidas:', comidas);


// -------------------------
// Funciones
// -------------------------
function sumar(x, y) {
return x + y;
}


const multiplicar = (x, y) => x * y;


console.log('Sumar 2 + 3 =', sumar(2, 3));
console.log('Multiplicar 2 * 3 =', multiplicar(2, 3));


// -------------------------
// Objetos
// -------------------------
const persona = {
nombre: 'Fede',
edad: 25,
saludar() {
return `Hola, soy ${this.nombre}`;
}
};


console.log(persona.saludar());


// -------------------------
// Ejemplo Integrador: Filtrado con arrow functions
// -------------------------
const productos = [
{ nombre: 'Pan', precio: 3 },
{ nombre: 'Queso', precio: 8 },
{ nombre: 'Vino', precio: 15 }
];


const caros = productos.filter(p => p.precio > 5);
console.log('Productos caros:', caros);


// -------------------------
// Ejercicio interactivo simple
// -------------------------
// Descomentar y probar en consola
// function calcularIMC(peso, altura) {
// return peso / (altura * altura);
// }
// console.log('IMC 74kg, 1.8m:', calcularIMC(74, 1.8));