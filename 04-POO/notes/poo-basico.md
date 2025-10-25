# Programación Orientada a Objetos (POO) en TypeScript

## ¿Qué es la POO?

La **Programación Orientada a Objetos** es una forma de organizar el código usando **objetos** que representan cosas del mundo real. Es como crear moldes (clases) para hacer galletas (objetos).

## Conceptos Básicos

### 1. Clases y Objetos

**Clase** = Molde o plantilla
**Objeto** = Cosa creada con ese molde

```ts
// Clase (molde)
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
}

// Objeto (cosa creada)
const juan = new Persona("Juan", 25);
console.log(juan.saludar()); // "Hola, soy Juan"
```

### 2. Constructor

El **constructor** es como las instrucciones para armar el objeto:

```ts
class Auto {
    marca: string;
    modelo: string;
    año: number;

    // Constructor: se ejecuta al crear el objeto
    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
}

const miAuto = new Auto("Toyota", "Corolla", 2023);
```

### 3. Propiedades y Métodos

```ts
class Mascota {
    // Propiedades (características)
    nombre: string;
    tipo: string;
    edad: number;

    constructor(nombre: string, tipo: string, edad: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }

    // Métodos (acciones que puede hacer)
    comer(): string {
        return `${this.nombre} está comiendo`;
    }

    dormir(): string {
        return `${this.nombre} está durmiendo`;
    }

    cumplirAños(): void {
        this.edad++;
        console.log(`${this.nombre} ahora tiene ${this.edad} años`);
    }
}
```

## Modificadores de Acceso

### Public (público)
```ts
class Estudiante {
    public nombre: string; // Se puede acceder desde afuera

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

const estudiante = new Estudiante("Ana");
console.log(estudiante.nombre); // ✅ Funciona
```

### Private (privado)
```ts
class CuentaBanco {
    private saldo: number; // Solo se puede usar dentro de la clase

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public consultarSaldo(): number {
        return this.saldo; // ✅ Desde dentro sí se puede
    }

    public depositar(cantidad: number): void {
        this.saldo += cantidad;
    }
}

const cuenta = new CuentaBanco(1000);
// console.log(cuenta.saldo); // ❌ Error: es privado
console.log(cuenta.consultarSaldo()); // ✅ Funciona: 1000
```

### Protected (protegido)
```ts
class Animal {
    protected energia: number; // Solo la clase y sus hijos pueden usarlo

    constructor(energia: number) {
        this.energia = energia;
    }
}

class Perro extends Animal {
    ladrar(): string {
        this.energia -= 10; // ✅ Puede usar energia porque es protected
        return "¡Guau guau!";
    }
}
```

## Herencia (extends)

Las clases pueden **heredar** de otras clases, como los hijos que se parecen a los padres:

```ts
// Clase padre
class Vehiculo {
    marca: string;
    año: number;

    constructor(marca: string, año: number) {
        this.marca = marca;
        this.año = año;
    }

    arrancar(): string {
        return "El vehículo está arrancando";
    }
}

// Clase hija que hereda de Vehiculo
class Carro extends Vehiculo {
    puertas: number;

    constructor(marca: string, año: number, puertas: number) {
        super(marca, año); // Llamar al constructor del padre
        this.puertas = puertas;
    }

    // Método propio del carro
    abrirPuertas(): string {
        return `Abriendo ${this.puertas} puertas`;
    }
}

const miCarro = new Carro("Honda", 2022, 4);
console.log(miCarro.arrancar());     // Heredado de Vehiculo
console.log(miCarro.abrirPuertas()); // Propio de Carro
```

## Getters y Setters

Para acceder y modificar propiedades de forma controlada:

```ts
class Rectangulo {
    private _ancho: number;
    private _alto: number;

    constructor(ancho: number, alto: number) {
        this._ancho = ancho;
        this._alto = alto;
    }

    // Getter: para obtener un valor
    get area(): number {
        return this._ancho * this._alto;
    }

    // Setter: para establecer un valor con validación
    set ancho(nuevoAncho: number) {
        if (nuevoAncho > 0) {
            this._ancho = nuevoAncho;
        } else {
            console.log("El ancho debe ser positivo");
        }
    }

    get ancho(): number {
        return this._ancho;
    }
}

const rect = new Rectangulo(5, 3);
console.log(rect.area); // 15
rect.ancho = 10;        // Usa el setter
console.log(rect.area); // 30
```

## Ejemplo Práctico: Sistema de Bootcamp

```ts
class EstudianteBootcamp {
    public nombre: string;
    public email: string;
    private progreso: number;
    private ejerciciosCompletados: string[];

    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
        this.progreso = 0;
        this.ejerciciosCompletados = [];
    }

    completarEjercicio(ejercicio: string): void {
        this.ejerciciosCompletados.push(ejercicio);
        this.progreso += 10;
        console.log(`${this.nombre} completó: ${ejercicio}`);
    }

    get porcentajeProgreso(): number {
        return Math.min(this.progreso, 100);
    }

    mostrarProgreso(): string {
        return `${this.nombre}: ${this.porcentajeProgreso}% completado`;
    }
}

const estudiante = new EstudianteBootcamp("María", "maria@email.com");
estudiante.completarEjercicio("Variables en JS");
estudiante.completarEjercicio("Funciones en JS");
console.log(estudiante.mostrarProgreso()); // "María: 20% completado"
```

## Resumen de Conceptos

| Concepto  |          ¿Qué es?         |            Ejemplo          |
|----------|----------|---------|
| **Clase** | Molde para crear objetos | `class Persona {}` |
| **Objeto** | Instancia de una clase | `new Persona()` |
| **Constructor** | Función que inicializa el objeto | `constructor() {}` |
| **Propiedad** | Característica del objeto | `nombre: string` |
| **Método** | Acción que puede hacer el objeto | `saludar() {}` |
| **Public** | Se puede acceder desde afuera | `public nombre` |
| **Private** | Solo dentro de la clase | `private saldo` |
| **Protected** | Solo la clase y sus hijos | `protected energia` |
| **Herencia** | Una clase hereda de otra | `extends` |
| **Getter/Setter** | Acceso controlado a propiedades | `get/set` |