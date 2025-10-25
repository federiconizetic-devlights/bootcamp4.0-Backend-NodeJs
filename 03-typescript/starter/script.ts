// 🚀 Archivo de ejemplo para probar TypeScript
// Este archivo te ayuda a entender cómo funciona el proceso

// Variables con tipos
const mensaje: string = "¡Hola desde TypeScript!";
const version: number = 1.0;
const activo: boolean = true;

// Función con tipos
function saludar(nombre: string): string {
    return `Hola ${nombre}, bienvenido al bootcamp!`;
}

// Array con tipos
const tecnologias: string[] = ["TypeScript", "Node.js", "Express"];

// Objeto con tipos inline
const estudiante: { nombre: string; edad: number; activo: boolean } = {
    nombre: "Estudiante del Bootcamp",
    edad: 25,
    activo: true
};

// 🎯 Resultados en consola
console.log("=== EJEMPLO TYPESCRIPT ===");
console.log("Mensaje:", mensaje);
console.log("Versión:", version);
console.log("Activo:", activo);
console.log(saludar("Ana"));
console.log("Tecnologías:", tecnologias);
console.log("Estudiante:", estudiante);

// 💡 Para usar este archivo:
// 1. Ejecuta: tsc script.ts
// 2. Abre index.html en el navegador
// 3. Abre la consola (F12) para ver los resultados