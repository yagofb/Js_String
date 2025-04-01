// 1. Declara una variable cuyo nombre sea cadena y tenga el valor "Hola Mundo".
let cadena = "Hola Mundo";

// 2. Muestra por consola la longitud de la cadena.
console.log("2. Longitud de la cadena:", cadena.length);

// 3. Muestra por consola la cadena con todos sus caracteres en mayúsculas.
console.log("3. En mayúsculas:", cadena.toUpperCase());

// 4. Muestra por consola la cadena con todos sus caracteres en minúsculas.
console.log("4. En minúsculas:", cadena.toLowerCase());

// 5. Muestra por consola la posición de la cadena en la que se encuentra la letra 'o'.
console.log("5. Posición de 'o':", cadena.indexOf('o'));

// 6. Muestra por consola la posición de la cadena en la que se encuentra la cadena "Hola".
console.log("6. Posición de 'Hola':", cadena.indexOf("Hola"));

// 7. Reemplaza la cadena "Mundo" por la cadena "Youtube" y muestra el resultado.
console.log("7. Reemplazo de 'Mundo' por 'Youtube':", cadena.replace("Mundo", "Youtube"));

// 8. Extrae la segunda parte de la cadena y muéstrala por consola.
console.log("8. Segunda parte de la cadena:", cadena.split(" ")[1]);

// 9. Comprueba si la cadena empieza por "h".
console.log("9. Empieza por 'h':", cadena.startsWith("h"));

// 10. Comprueba si la cadena empieza por "H".
console.log("10. Empieza por 'H':", cadena.startsWith("H"));

// 11. Muestra utilizando TEMPLATE STRINGS la letra "r" declarada 10 veces.
console.log(`11. ${"r".repeat(10)}`);
