const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function mostrarTareas() {
  if (tareas.length === 0) {
    console.log('No hay tareas en la lista.');
  } else {
    console.log('Lista de tareas:');
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea}`);
    });
  }
}

function agregarTarea() {
  rl.question('Ingrese una nueva tarea: ', (nuevaTarea) => {
    tareas.push(nuevaTarea);
    console.log(`Tarea "${nuevaTarea}" agregada.`);
    mostrarTareas();
    mostrarMenu();
  });
}

function modificarTarea() {
  mostrarTareas();
  rl.question('Ingrese el número de la tarea que desea modificar: ', (numero) => {
    const tareaAModificar = tareas[Number(numero) - 1];
    if (tareaAModificar) {
      rl.question(`Modificar tarea "${tareaAModificar}" a: `, (nuevaDescripcion) => {
        tareas[Number(numero) - 1] = nuevaDescripcion;
        console.log(`Tarea "${tareaAModificar}" modificada.`);
        mostrarTareas();
        mostrarMenu();
      });
    } else {
      console.log('Número de tarea no válido.');
      mostrarTareas();
      mostrarMenu();
    }
  });
}

function eliminarTarea() {
  mostrarTareas();
  rl.question('Ingrese el número de la tarea que desea eliminar: ', (numero) => {
    const tareaEliminada = tareas.splice(Number(numero) - 1, 1);
    if (tareaEliminada.length > 0) {
      console.log(`Tarea "${tareaEliminada[0]}" eliminada.`);
    } else {
      console.log('Número de tarea no válido.');
    }
    mostrarTareas();
    mostrarMenu();
  });
}

function mostrarMenu() {
  console.log('\nSeleccione una opción:');
  console.log('1. Mostrar tareas');
  console.log('2. Agregar tarea');
  console.log('3. Modificar tarea');
  console.log('4. Eliminar tarea');
  console.log('5. Salir');

  rl.question('Opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        mostrarTareas();
        mostrarMenu();
        break;
      case '2':
        agregarTarea();
        break;
      case '3':
        modificarTarea();
        break;
      case '4':
        eliminarTarea();
        break;
      case '5':
        console.log('¡Adiós!');
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        mostrarMenu();
    }
  });
}

mostrarMenu();
