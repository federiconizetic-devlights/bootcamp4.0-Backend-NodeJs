# Tipos en TypeScript

## ¿Qué es TypeScript?

TypeScript es JavaScript con **tipado estático**. Esto significa que podemos especificar qué tipo de datos esperamos en nuestras variables, funciones y objetos. Esto nos ayuda a:
- Detectar errores antes de ejecutar el código
- Tener mejor autocompletado en el editor
- Hacer el código más legible y mantenible

## Tipos Primitivos

Los tipos básicos de TypeScript son:

### 1. String (Texto)
```ts
const nombre: string = "Federico";
const apellido: string = 'González';
const mensaje: string = `Hola ${nombre}!`; // Template literals
```

### 2. Number (Números)
```ts
const edad: number = 28;
const precio: number = 99.99;
const negativo: number = -10;
const infinito: number = Infinity;
```

### 3. Boolean (Verdadero/Falso)
```ts
const activo: boolean = true;
const completado: boolean = false;
const esMayor: boolean = edad > 18;
```

### 4. Null y Undefined
```ts
const vacio: null = null;
const indefinido: undefined = undefined;
```

### 5. Any (Cualquier tipo - ⚠️ Evitar)
```ts
let cualquierCosa: any = "texto";
cualquierCosa = 42;
cualquierCosa = true; // No hay error, pero perdemos las ventajas de TypeScript
```

### 6. Unknown (Tipo seguro)
```ts
let desconocido: unknown = "algo";
// Necesitamos verificar el tipo antes de usar
if (typeof desconocido === "string") {
    console.log(desconocido.toUpperCase()); // Ahora es seguro
}
```

## Arrays (Arreglos)

Podemos especificar el tipo de elementos que contiene un array:

```ts
// Sintaxis 1: tipo[]
const numeros: number[] = [1, 2, 3, 4, 5];
const nombres: string[] = ["Juan", "María", "Pedro"];
const activos: boolean[] = [true, false, true];

// Sintaxis 2: Array<tipo>
const edades: Array<number> = [25, 30, 35];
const ciudades: Array<string> = ["Madrid", "Barcelona"];
```

## Objetos

### Tipado Inline
```ts
const persona: { nombre: string; edad: number; activo: boolean } = {
    nombre: "Ana",
    edad: 25,
    activo: true
};
```

### Propiedades Opcionales
```ts
const usuario: { nombre: string; email?: string } = {
    nombre: "Carlos"
    // email es opcional, no es necesario incluirlo
};
```

## Funciones

### Tipado de Parámetros y Retorno
```ts
// Función que suma dos números
function sumar(a: number, b: number): number {
    return a + b;
}

// Función que saluda (no retorna nada = void)
function saludar(nombre: string): void {
    console.log(`Hola ${nombre}!`);
}

// Función con parámetro opcional
function presentar(nombre: string, apellido?: string): string {
    if (apellido) {
        return `${nombre} ${apellido}`;
    }
    return nombre;
}
```

### Arrow Functions
```ts
const multiplicar = (a: number, b: number): number => a * b;

const esPar = (numero: number): boolean => numero % 2 === 0;
```

## Union Types (Tipos Unión)

Permiten que una variable pueda ser de varios tipos:

```ts
// Puede ser string o number
let id: string | number;
id = "ABC123";
id = 456;

// Función que acepta string o number
function mostrarId(id: string | number): void {
    console.log(`ID: ${id}`);
}

mostrarId("ABC"); // ✅ Válido
mostrarId(123);   // ✅ Válido
```

## Literal Types

Valores específicos como tipos:

```ts
// Configuración con valores específicos
type Tamaño = "small" | "medium" | "large";
const camiseta: Tamaño = "medium";
```

## Type Aliases

Crear nombres personalizados para tipos:

```ts
// Definir un tipo personalizado
type Usuario = {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
};

// Usar el tipo
const nuevoUsuario: Usuario = {
    id: 1,
    nombre: "Luis",
    email: "luis@email.com",
    activo: true
};

// Tipo para funciones
type OperacionMatematica = (a: number, b: number) => number;

const sumar: OperacionMatematica = (a, b) => a + b;
const restar: OperacionMatematica = (a, b) => a - b;
```

## Inferencia de Tipos

TypeScript puede "adivinar" los tipos automáticamente:

```ts
// TypeScript infiere que es string
let mensaje = "Hola mundo"; // mensaje: string

// TypeScript infiere que es number
let contador = 0; // contador: number

// TypeScript infiere el tipo de retorno
function calcular(x: number, y: number) {
    return x + y; // TypeScript sabe que retorna number
}
```

