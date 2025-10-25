# 🚀 TypeScript Starter

Este folder contiene todo lo que necesitas para empezar a trabajar con TypeScript de forma fácil, similar a como trabajabas con JavaScript.

## 📁 Archivos incluidos:

- **`index.html`** - Página web para ver los resultados (como en JavaScript)
- **`script.ts`** - Archivo de ejemplo en TypeScript
- **`README.md`** - Este archivo con instrucciones

## 🔧 ¿Cómo empezar?

### Opción 1: Usar el ejemplo incluido
1. Abre la terminal en esta carpeta
2. Ejecuta: `tsc script.ts`
3. Abre `index.html` en tu navegador
4. Abre la consola del navegador (F12) para ver los resultados

### Opción 2: Crear tu propio archivo
1. Crea un nuevo archivo `.ts` (ejemplo: `mi-practica.ts`)
2. Escribe tu código TypeScript
3. Compila con: `tsc mi-practica.ts`
4. Edita `index.html` y cambia la línea:
   ```html
   <script src="script.js"></script>
   ```
   por:
   ```html
   <script src="mi-practica.js"></script>
   ```
5. Abre `index.html` en el navegador

## 💡 Comandos útiles:

```bash
# Compilar un archivo específico
tsc mi-archivo.ts

# Compilar y vigilar cambios (recompila automáticamente)
tsc mi-archivo.ts --watch

# Compilar todos los archivos .ts
tsc *.ts
```

## 🎯 Tips importantes:

1. **Siempre compila antes de probar** - TypeScript no se ejecuta directamente
2. **Revisa la consola** - Los errores de TypeScript aparecen al compilar
3. **Usa la consola del navegador** - Para ver los `console.log()`
4. **El archivo .js se genera automáticamente** - No lo edites manualmente

## 🆘 ¿Problemas?

- **"tsc no se reconoce"**: Instala TypeScript globalmente con `npm install -g typescript`
- **Errores al compilar**: Lee los mensajes, TypeScript te dice exactamente qué está mal
- **No veo resultados**: Abre la consola del navegador (F12)

¡Ahora puedes trabajar con TypeScript tan fácil como con JavaScript!