(function () {
  //Botón para mostrar el Modal de Agregar Tarea
  const nuevaTareaBtn = document.querySelector('#agregar-tarea');
  nuevaTareaBtn.addEventListener('click', mostrarFormulario);

  function mostrarFormulario() {
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
            <form class="formulario nueva-tarea">
                <legend>Añade una nueva tarea</legend>
                <div class="campo">
                    <label for="tarea">Tarea</label>
                    <input
                        type="text"
                        name="tarea"
                        placeholder="Añadir Tarea al Proyecto Actual"
                        id="tarea"
                    />
                </div>
                <div class="opciones">

                    <input
                        type="submit"
                        class="submit-nueva-tarea"
                        value="Añadir Tarea"
                    />

                <button type="button" class="cerrar-modal">Cancelar</button>
                </div>
            </form>`;

    // console.log(modal);
    setTimeout(() => {
      const formulario = document.querySelector('.formulario');
      formulario.classList.add('animar');
    }, 0);

    modal.addEventListener('click', function (e) {
      //   console.log(e.target);
      e.preventDefault();
      if (e.target.classList.contains('cerrar-modal')) {
        const formulario = document.querySelector('.formulario');

        formulario.classList.add('cerrar');
        setTimeout(() => {
          modal.remove();
        }, 500);
      }
      if (e.target.classList.contains('submit-nueva-tarea')) {
        submitFormularioNuevaTera();
      }
    });

    document.querySelector('.dashboard').appendChild(modal);
  }
  function submitFormularioNuevaTera() {
    const tarea = document.querySelector('#tarea').value.trim();
    // console.log(tarea)

    if (tarea === '') {
      //Mostrar una alerta de error
      mostrarAlerta('El Nombre de la Tarea es Obligatorio', 'error', document.querySelector('.formulario legend'));
      return;
    }

    // console.log('Despues del if');
    agregarTarea(tarea);
  }
  /**


 * @param {HTMLElement} referencia
 */
  //Muestra un mensaje en la interfaz
  function mostrarAlerta(mensaje, tipo, referencia) {
    //Previene la creacion de multiples alertas
    const alertaPrevia = document.querySelector('.alerta');
    if (alertaPrevia) {
      alertaPrevia.remove();
    }
    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta', tipo);
    alerta.textContent = mensaje;
    //Inserta la alerta antes de legend
    referencia.parentElement.insertBefore(alerta, referencia.nextSibling);
    //Elimina la alerta
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }

  //Consultar el Servidor para añadir una nueva tarea al proyecto actual
  async function agregarTarea(tarea) {
    //Contruir la petiión
    const datos = new FormData();
    datos.append('nombre', tarea);
    datos.append('proyectoId', obtenerProyecto());

    try {
      const url = '/api/tarea';
      const respuesta = await fetch(url, {
        method: 'POST',
        body: datos,
      });
      const resultado = await respuesta.json();
      console.log(resultado);

      mostrarAlerta(resultado.mensaje, resultado.tipo, document.querySelector('.formulario legend'));
      if (resultado.tipo === 'exito') {
        const modal = document.querySelector('.modal');
        setTimeout(() => {
          modal.remove();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function obtenerProyecto() {
    const proyectoParams = new URLSearchParams(window.location.search);
    const proyecto = Object.fromEntries(proyectoParams.entries()); //id del proyecto  actual
    return proyecto.id;
  }
})();
