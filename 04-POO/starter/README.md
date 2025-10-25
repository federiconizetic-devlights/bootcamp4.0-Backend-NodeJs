# 🏗️ POO Starter - Programación Orientada a Objetos

Este folder contiene todo lo que necesitas para empezar a trabajar con **POO en TypeScript**. 

## 📁 Archivos incluidos:

- **`index.html`** - Página web para ver los resultados
- **`script.ts`** - Ejemplos completos de clases y objetos
- **`README.md`** - Este archivo con instrucciones

## 🎯 ¿Qué es la POO?

La **Programación Orientada a Objetos** es como tener **moldes** (clases) para crear **galletas** (objetos). Nos permite:

- ✅ Organizar mejor el código
- ✅ Reutilizar funcionalidad
- ✅ Modelar cosas del mundo real
- ✅ Hacer código más mantenible

## 🔧 ¿Cómo empezar?

### Opción 1: Ver el ejemplo incluido
1. Ejecuta: `tsc script.ts`
2. Abre `index.html` en tu navegador
3. Abre la consola del navegador (F12) para ver objetos en acción

### Opción 2: Crear tu propia clase
1. Crea un archivo `.ts` (ejemplo: `mi-clase.ts`)
2. Escribe tu clase con propiedades y métodos
3. Compila: `tsc mi-clase.ts`
4. Edita `index.html` y cambia:
   ```html
   <script src="script.js"></script>
   ```
   por:
   ```html
   <script src="mi-clase.js"></script>
   ```
5. Abre `index.html` en el navegador

## 🏗️ Estructura básica de una clase:

```typescript
class MiClase {
    // Propiedades (características)
    nombre: string;
    edad: number;

    // Constructor (inicializa el objeto)
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Métodos (acciones)
    saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
}

// Crear objeto
const objeto = new MiClase("Juan", 25);
console.log(objeto.saludar());
```

## 📝 Conceptos clave que verás:

### 🔹 **Clases y Objetos**
```typescript
class Persona { }           // Clase (molde)
const juan = new Persona(); // Objeto (instancia)
```

### 🔹 **Propiedades y Métodos**
```typescript
class Auto {
    marca: string;           // Propiedad
    arrancar(): string { }   // Método
}
```

### 🔹 **Constructor**
```typescript
constructor(marca: string) {
    this.marca = marca;     // Inicializa propiedades
}
```

### 🔹 **Modificadores de acceso**
```typescript
public nombre: string;      // Accesible desde afuera
private saldo: number;      // Solo dentro de la clase
protected id: number;       // Solo clase e hijos
```

### 🔹 **Herencia**
```typescript
class Vehiculo { }
class Auto extends Vehiculo { } // Auto hereda de Vehiculo
```

## 💡 Comandos útiles:

```bash
# Compilar archivo específico
tsc mi-archivo.ts

# Compilar y vigilar cambios
tsc mi-archivo.ts --watch

# Compilar todos los archivos .ts
tsc *.ts
```

## 🎮 Ejemplos para practicar:

1. **Clase Estudiante** - con nombre, edad, notas
2. **Clase Producto** - con nombre, precio, stock
3. **Clase Animal** - y clases Perro, Gato que hereden
4. **Clase CuentaBanco** - con saldo privado y métodos

##  ¿Problemas?

- **"tsc no se reconoce"**: `npm install -g typescript`
- **Errores de compilación**: Lee el mensaje, TypeScript es muy claro
- **No veo resultados**: Abre consola del navegador (F12)
- **Propiedades undefined**: Verifica el constructor

##  Recursos:

- **Teoría**: Ve a `../notes/poo-basico.md`
- **Ejercicios**: Ve a `../exercises/` para practicar
- **Documentación**: [TypeScript Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

---