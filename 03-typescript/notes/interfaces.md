# Interfaces en TypeScript

## ¿Qué son las Interfaces?

Las interfaces definen la **forma** que debe tener un objeto. Son como un "contrato" que especifica qué propiedades y métodos debe tener un objeto.

```ts
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

const usuario: Usuario = {
    id: 1,
    nombre: "Ana",
    email: "ana@email.com"
};
```

## Propiedades Opcionales

Usa `?` para propiedades que pueden o no estar presentes:

```ts
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string; // Opcional
}

const producto1: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 1000
    // descripcion no es necesaria
};
```

## Propiedades de Solo Lectura

Usa `readonly` para propiedades que no se pueden modificar:

```ts
interface Configuracion {
    readonly apiUrl: string;
    readonly version: number;
    debug: boolean;
}

const config: Configuracion = {
    apiUrl: "https://api.ejemplo.com",
    version: 1,
    debug: true
};

// config.apiUrl = "otra-url"; // ❌ Error: no se puede modificar
config.debug = false; // ✅ Válido
```

## Interfaces para Funciones

```ts
interface OperacionMatematica {
    (a: number, b: number): number;
}

const sumar: OperacionMatematica = (x, y) => x + y;
const multiplicar: OperacionMatematica = (x, y) => x * y;
```

## Extender Interfaces

Las interfaces pueden heredar de otras interfaces:

```ts
interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado extends Persona {
    cargo: string;
    salario: number;
}

const empleado: Empleado = {
    nombre: "Carlos",
    edad: 30,
    cargo: "Desarrollador",
    salario: 50000
};
```

## Interface vs Type: ¿Cuál usar?

### Interface 📋
```ts
interface Usuario {
    id: number;
    nombre: string;
}

// Se puede extender
interface UsuarioCompleto extends Usuario {
    email: string;
}
```

### Type 🏷️
```ts
type Estado = "loading" | "success" | "error";

type Operacion = (a: number, b: number) => number;
```

## Cuándo usar cada uno:

| **Interface** | **Type** |
|---------------|----------|
| ✅ Objetos y clases | ✅ Union types |
| ✅ Cuando necesitas extender | ✅ Primitive aliases |
| ✅ APIs públicas | ✅ Computed properties |

## Ejemplo Práctico

```ts
// Definir la estructura de datos
interface TareaBootcamp {
    id: number;
    titulo: string;
    completada: boolean;
    estudiante: string;
    fechaEntrega?: Date;
}

// Función que usa la interface
function crearTarea(datos: TareaBootcamp): TareaBootcamp {
    return {
        ...datos,
        completada: false
    };
}

// Uso
const nuevaTarea = crearTarea({
    id: 1,
    titulo: "Ejercicios TypeScript",
    completada: false,
    estudiante: "María"
});
```