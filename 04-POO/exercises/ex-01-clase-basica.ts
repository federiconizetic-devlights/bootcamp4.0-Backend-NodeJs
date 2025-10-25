// 🎯 EJERCICIO 1: Mi Primera Clase
// Crea una clase simple para representar un producto de una tienda

// TODO 1: Crea una clase llamada "Producto" que tenga:
// - nombre (string, público)
// - precio (number, público)  
// - stock (number, público)
// - constructor que reciba nombre, precio y stock inicial

class Producto {
    // Completa aquí las propiedades

    // Completa aquí el constructor
    constructor(/* parámetros aquí */) {
        // Asignar valores aquí
    }

    // TODO 2: Agrega un método llamado "mostrarInfo" que retorne un string con:
    // "Producto: [nombre] - Precio: $[precio] - Stock: [stock] unidades"
    
    mostrarInfo(): string {
        // Completa aquí
    }

    // TODO 3: Agrega un método llamado "vender" que:
    // - Reciba una cantidad (number)
    // - Si hay suficiente stock, reste la cantidad del stock
    // - Si no hay suficiente, muestre "Stock insuficiente"
    // - Retorne true si se pudo vender, false si no

    vender(cantidad: number): boolean {
        // Completa aquí
    }

    // TODO 4: Agrega un método llamado "reabastecer" que:
    // - Reciba una cantidad (number)
    // - Sume esa cantidad al stock actual

    reabastecer(cantidad: number): void {
        // Completa aquí
    }
}

// Ejecuta: tsc ex-01-clase-basica.ts , recorda cambiar el archivo en index.html
