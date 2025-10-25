// 🎯 EJERCICIO: Interfaces Básicas en TypeScript

// ==================== EJERCICIO 1: INTERFACE BÁSICA ====================

// TODO 1: Crea una interface llamada "Estudiante" que tenga:
// - nombre (string)
// - edad (number)
// - activo (boolean)

interface Estudiante {
    // completa aquí
}

// Ahora crea un objeto usando la interface:
const estudiante1: Estudiante = {
    // completa aquí
};

// ==================== EJERCICIO 2: PROPIEDADES OPCIONALES ====================

// TODO 2: Crea una interface llamada "Producto" que tenga:
// - id (number)
// - nombre (string) 
// - precio (number)
// - descripcion (string, pero OPCIONAL con ?)

interface Producto {
    // completa aquí
}

// Crea dos productos: uno con descripción y otro sin descripción
const producto1: Producto = {
    // completa aquí (CON descripción)
};

const producto2: Producto = {
    // completa aquí (SIN descripción)
};

// ==================== EJERCICIO 3: INTERFACE PARA FUNCIONES ====================

// TODO 3: Crea una interface para una función que:
// - Reciba dos parámetros: a (number) y b (number)
// - Retorne un number

interface Calculadora {
    // completa aquí: (a: number, b: number) => number
}

// Crea una función que sume usando la interface:
const sumarNumeros: Calculadora = (a, b) => {
    // completa aquí
};

// ==================== EJERCICIO 4: READONLY ====================

// TODO 4: Crea una interface "ConfiguracionApp" que tenga:
// - apiUrl (string, READONLY)
// - version (number, READONLY) 
// - debug (boolean, normal)

interface ConfiguracionApp {
    // completa aquí
}

const config: ConfiguracionApp = {
    // completa aquí
};

// ==================== EJERCICIO 5: EXTENDER INTERFACES ====================

// TODO 5: Crea una interface "Persona" con nombre y edad
// Luego crea "Empleado" que EXTIENDA Persona y agregue cargo y salario

interface Persona {
    // completa aquí
}

interface Empleado extends Persona {
    // completa aquí
}

const empleado: Empleado = {
    // completa aquí (debe tener TODAS las propiedades)
};
