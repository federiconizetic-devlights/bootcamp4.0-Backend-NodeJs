// 🎯 EJERCICIO 3: Herencia - Animales
// Practica herencia y métodos especializados

// TODO 1: Crea una clase padre "Animal" que tenga:
// - nombre (string, público)
// - edad (number, público)
// - especie (string, público)

class Animal {
    // Completa aquí las propiedades

    // TODO 2: Constructor que reciba nombre, edad y especie
    constructor(/* parámetros aquí */) {
        // Asignar valores aquí
    }

    // TODO 3: Método "comer" que retorne:
    // "[nombre] está comiendo"
    comer(): string {
        // Completa aquí
    }

    // TODO 4: Método "dormir" que retorne:
    // "[nombre] está durmiendo"
    dormir(): string {
        // Completa aquí
    }

    // TODO 5: Método "mostrarInfo" que retorne:
    // "[nombre] es un/a [especie] de [edad] años"
    mostrarInfo(): string {
        // Completa aquí
    }
}

// TODO 6: Crea una clase "Perro" que HEREDE de Animal
// Debe tener una propiedad adicional: raza (string, público)

class Perro extends Animal {
    // Nueva propiedad para Perro
    raza: string;

    // TODO 7: Constructor que reciba nombre, edad, raza
    // La especie siempre será "Perro"
    // PISTA: usa super() para llamar al constructor del padre
    constructor(/* parámetros aquí */) {
        // Completa aquí (usa super())
    }

    // TODO 8: Método "ladrar" que retorne:
    // "[nombre] dice: ¡Guau guau!"
    ladrar(): string {
        // Completa aquí
    }

    // TODO 9: Método "jugar" que retorne:
    // "[nombre] está jugando y moviendo la cola"
    jugar(): string {
        // Completa aquí
    }

    // TODO 10: SOBREESCRIBIR el método "mostrarInfo" para que retorne:
    // "[nombre] es un Perro de raza [raza] de [edad] años"
    mostrarInfo(): string {
        // Completa aquí
    }
}

// TODO 11: Crea una clase "Gato" que también HEREDE de Animal
// Debe tener una propiedad adicional: color (string, público)

class Gato extends Animal {
    // Nueva propiedad para Gato
    color: string;

    // Constructor que reciba nombre, edad, color
    // La especie siempre será "Gato"
    constructor(/* parámetros aquí */) {
        // Completa aquí (usa super())
    }

    // Método "maullar" que retorne:
    // "[nombre] dice: ¡Miau miau!"
    maullar(): string {
        // Completa aquí
    }

    // Método "mostrarInfo" que retorne:
    // "[nombre] es un Gato de color [color] de [edad] años"
    mostrarInfo(): string {
        // Completa aquí
    }
}

// ==================== PRUEBAS ====================
// Descomenta cuando termines:

// const animal1 = new Animal("Rex", 3, "Canino");
// console.log(animal1.mostrarInfo());
// console.log(animal1.comer());
// console.log(animal1.dormir());

// console.log("\n--- PERRO ---");
// const perro1 = new Perro("Buddy", 2, "Golden Retriever");
// console.log(perro1.mostrarInfo());
// console.log(perro1.comer()); // Heredado de Animal
// console.log(perro1.ladrar()); // Propio de Perro
// console.log(perro1.jugar());

// console.log("\n--- GATO ---");
// const gato1 = new Gato("Whiskers", 1, "Negro");
// console.log(gato1.mostrarInfo());
// console.log(gato1.dormir()); // Heredado de Animal
// console.log(gato1.maullar()); // Propio de Gato

// 🎉 Ejecuta: tsc ex-03-herencia.ts