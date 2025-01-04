import * as fs from 'fs';
import * as path from 'path';

const outputPath = 'outputs'; // Nombre de la carpeta de salida
const outputFile = path.join(outputPath, 'tabla-5.txt'); // Ruta completa del archivo

// Crear la carpeta si no existe
fs.mkdirSync(outputPath, { recursive: true });

// Generar la tabla del 5
const tablaDelCinco: string[] = [];
const titulo = 'Tabla del 5';
tablaDelCinco.push(titulo);
tablaDelCinco.push('---------------');

for (let i = 1; i <= 10; i++) {
  const resultado = `5 x ${i} = ${5 * i}`;
  console.log(resultado); // Mostrar en consola
  tablaDelCinco.push(resultado);
}

// Guardar en archivo .txt dentro de la carpeta outputs
const contenido = tablaDelCinco.join('\n');
fs.writeFileSync(outputFile, contenido, 'utf8');

console.log(`La tabla del 5 se ha guardado en el archivo "${outputFile}"`);