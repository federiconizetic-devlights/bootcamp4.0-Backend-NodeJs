// 🏗️ Ejemplo de POO - Programación Orientada a Objetos
// Este archivo te muestra cómo crear clases y objetos en TypeScript

// Ejemplo 1: Clase básica con propiedades y métodos
class Persona {
    // Propiedades (características)
    nombre: string;
    edad: number;
    profesion: string;

    // Constructor (función que inicializa el objeto)
    constructor(nombre: string, edad: number, profesion: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    // Métodos (acciones que puede hacer la persona)
    saludar(): string {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }

    trabajar(): string {
        return `${this.nombre} está trabajando como ${this.profesion}`;
    }

    cumplirAños(): void {
        this.edad++;
        console.log(`¡${this.nombre} ahora tiene ${this.edad} años!`);
    }
}

// Ejemplo 2: Clase con propiedades privadas
class CajaFuerte {
    private dinero: number; // Private = solo se puede usar dentro de la clase
    public propietario: string; // Public = se puede acceder desde afuera

    constructor(propietario: string, dineroInicial: number = 0) {
        this.propietario = propietario;
        this.dinero = dineroInicial;
    }

    // Método público para ver el dinero (única forma desde afuera)
    consultarDinero(): number {
        return this.dinero;
    }

    guardarDinero(cantidad: number): void {
        if (cantidad > 0) {
            this.dinero += cantidad;
            console.log(`${this.propietario} guardó $${cantidad}. Total: $${this.dinero}`);
        }
    }

    retirarDinero(cantidad: number): boolean {
        if (cantidad > 0 && cantidad <= this.dinero) {
            this.dinero -= cantidad;
            console.log(`${this.propietario} retiró $${cantidad}. Quedan: $${this.dinero}`);
            return true;
        } else {
            console.log("No se puede retirar esa cantidad");
            return false;
        }
    }
}

// Ejemplo 3: Herencia (clase padre e hija)
class Vehiculo {
    marca: string;
    modelo: string;
    año: number;

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    arrancar(): string {
        return `El ${this.marca} ${this.modelo} está arrancando`;
    }

    frenar(): string {
        return `El ${this.marca} ${this.modelo} está frenando`;
    }
}

// Clase Moto que HEREDA de Vehiculo
class Moto extends Vehiculo {
    cilindrada: number;

    constructor(marca: string, modelo: string, año: number, cilindrada: number) {
        super(marca, modelo, año); // Llamar al constructor del padre
        this.cilindrada = cilindrada;
    }

    hacerWheeLie(): string {
        return `La ${this.marca} está haciendo wheelie!`;
    }

    // Sobreescribir método del padre
    arrancar(): string {
        return `La moto ${this.marca} ${this.modelo} arranca con rugido de ${this.cilindrada}cc`;
    }
}

// ==================== CREANDO OBJETOS Y PROBÁNDOLOS ====================

console.log("=== EJEMPLO POO - BOOTCAMP 4.0 ===");

// Crear objetos de la clase Persona
const persona1 = new Persona("Ana", 25, "Desarrolladora");
const persona2 = new Persona("Carlos", 30, "Diseñador");

console.log("\n--- PERSONAS ---");
console.log(persona1.saludar());
console.log(persona1.trabajar());
console.log(persona2.saludar());
persona1.cumplirAños();

// Crear objetos de la clase CajaFuerte
const caja = new CajaFuerte("María", 100);

console.log("\n--- CAJA FUERTE ---");
console.log(`Propietario: ${caja.propietario}`);
console.log(`Dinero inicial: $${caja.consultarDinero()}`);
caja.guardarDinero(500);
caja.retirarDinero(200);
caja.retirarDinero(1000); // Debe fallar

// Crear objetos con herencia
const vehiculo = new Vehiculo("Toyota", "Corolla", 2020);
const moto = new Moto("Yamaha", "R1", 2023, 1000);

console.log("\n--- VEHÍCULOS ---");
console.log(vehiculo.arrancar());
console.log(moto.arrancar()); // Método sobreescrito
console.log(moto.hacerWheeLie()); // Método propio de Moto
console.log(moto.frenar()); // Método heredado de Vehiculo

console.log("\n🎉 ¡Estos son ejemplos de POO en acción!");
console.log("💡 Ahora ve a los ejercicios para practicar tu mismo");

// 💡 Para usar este archivo:
// 1. Ejecuta: tsc script.ts
// 2. Abre index.html en el navegador
// 3. Abre la consola (F12) para ver los resultados