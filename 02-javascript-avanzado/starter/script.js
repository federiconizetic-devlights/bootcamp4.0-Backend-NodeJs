// -------------------------
// Ciclos
// -------------------------
console.log('=== Ciclos ===');

// For
for (let i = 1; i <= 5; i++) {
  console.log(`For: ${i}`);
}

// While
let j = 1;
while (j <= 5) {
  console.log(`While: ${j}`);
  j++;
}

// Do-while
let k = 1;
do {
  console.log(`Do-While: ${k}`);
  k++;
} while (k <= 5);


// -------------------------
// Estructuras de control
// -------------------------
console.log('\n=== Estructuras de control ===');

const nota = 7;
if (nota >= 6) {
  console.log('Aprobado');
} else {
  console.log('Desaprobado');
}

const dia = 3;
switch (dia) {
  case 1: console.log('Lunes'); break;
  case 2: console.log('Martes'); break;
  case 3: console.log('Miércoles'); break;
  case 4: console.log('Jueves'); break;
  case 5: console.log('Viernes'); break;
  case 6: console.log('Sábado'); break;
  case 7: console.log('Domingo'); break;
  default: console.log('Número inválido'); break;
}


// -------------------------
// Métodos avanzados de Arrays
// -------------------------
console.log('\n=== Métodos avanzados de Arrays ===');

const numeros = [1, 5, 10, 15, 20];

// Map
const dobles = numeros.map(n => n * 2);
console.log('Dobles:', dobles);

// Filter
const pares = numeros.filter(n => n % 2 === 0);
console.log('Pares:', pares);

// Reduce
const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log('Suma total:', suma);

// Find
const mayorQue10 = numeros.find(n => n > 10);
console.log('Primer número > 10:', mayorQue10);

// forEach
console.log('Recorrer array con forEach:');
numeros.forEach(n => console.log(n * 3));


// -------------------------
// Ejemplo integrador
// -------------------------
console.log('\n=== Ejemplo integrador ===');

const productos = [
  { nombre: 'Pan', precio: 3 },
  { nombre: 'Queso', precio: 8 },
  { nombre: 'Vino', precio: 15 },
];

const caros = productos.filter(p => p.precio > 5).map(p => p.nombre);
console.log('Productos caros:', caros);


// -------------------------
// Ejercicio interactivo simple
// -------------------------
// Descomentar y probar en consola
// function calcularPromedio(arr) {
//   return arr.reduce((a, b) => a + b, 0) / arr.length;
// }
// console.log('Promedio [2,4,6]:', calcularPromedio([2,4,6]));
