/* Requerir un modulo */
const path = require('path');
const fs = require('fs');

// Path
// console.log( path.resolve(__dirname, 'data/data.json') );
// console.log( path.join(__dirname, 'data/data.json') );
const rutaAlJson = path.resolve(__dirname, 'data/data.json');
const tareas = fs.readFileSync(rutaAlJson, { encoding: 'UTF-8' });


console.log(tareas);
console.log(JSON.parse(tareas));
// tareas.forEach(tarea => {
//     console.log(tarea);
// })


