(function(){p();let s=[];document.querySelector("#agregar-tarea").addEventListener("click",f);async function p(){try{const t=`/api/tareas?id=${u()}`;s=(await(await fetch(t)).json()).tareas,l()}catch(e){console.log(e)}}function l(){if(S(),s.length===0){const t=document.querySelector("#listado-tareas"),o=document.createElement("LI");o.textContent="No Hay Tareas En Este Proyecto",o.classList.add("no-tareas"),t.appendChild(o);return}const e={0:"Pendiente",1:"Completa"};s.forEach(t=>{const o=document.createElement("LI");o.dataset.tareaId=t.id,o.classList.add("tarea");const n=document.createElement("P");n.textContent=t.nombre;const a=document.createElement("DIV");a.classList.add("opciones");const r=document.createElement("BUTTON");r.classList.add("estado-tarea"),r.classList.add(`${e[t.estado].toLowerCase()}`),r.textContent=e[t.estado],r.dataset.estadoTarea=t.estado,r.ondblclick=function(){b({...t})};const c=document.createElement("BUTTON");c.classList.add("eliminar-tarea"),c.dataset.idTarea=t.id,c.textContent="Eliminar",c.ondblclick=function(){v({...t})},a.appendChild(r),a.appendChild(c),o.appendChild(n),o.appendChild(a),document.querySelector("#listado-tareas").appendChild(o)})}function f(){const e=document.createElement("DIV");e.classList.add("modal"),e.innerHTML=`
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
            </form>`,setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),e.addEventListener("click",function(t){t.preventDefault(),t.target.classList.contains("cerrar-modal")&&(document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{e.remove()},500)),t.target.classList.contains("submit-nueva-tarea")&&T()}),document.querySelector(".dashboard").appendChild(e)}function T(){const e=document.querySelector("#tarea").value.trim();if(e===""){m("El Nombre de la Tarea es Obligatorio","error",document.querySelector(".formulario legend"));return}y(e)}function m(e,t,o){const n=document.querySelector(".alerta");n&&n.remove();const a=document.createElement("DIV");a.classList.add("alerta",t),a.textContent=e,o.parentElement.insertBefore(a,o.nextSibling),setTimeout(()=>{a.remove()},3e3)}async function y(e){const t=new FormData;t.append("nombre",e),t.append("proyectoId",u());try{const a=await(await fetch("/api/tarea",{method:"POST",body:t})).json();if(m(a.mensaje,a.tipo,document.querySelector(".formulario legend")),a.tipo==="exito"){const r=document.querySelector(".modal");setTimeout(()=>{r.remove()},1e3);const c={id:String(a.id),nombre:e,estado:"0",proyectoID:a.proyectoId};s=[...s,c],l()}}catch(o){console.log(o)}}function b(e){const t=e.estado==="1"?"0":"1";e.estado=t,h(e)}async function h(e){const{estado:t,id:o,nombre:n}=e,a=new FormData;a.append("id",o),a.append("nombre",n),a.append("estado",t),a.append("proyectoId",u());try{const i=await(await fetch("/api/tarea/actualizar",{method:"POST",body:a})).json();i.respuesta.tipo==="exito"&&m(i.respuesta.mensaje,i.respuesta.tipo,document.querySelector(".contenedor-nueva-tarea")),s=s.map(d=>(d.id===o&&(d.estado=t),d)),l()}catch(r){console.log(r)}}function v(e){Swal.fire({title:"¿Eliminar tarea?",showCancelButton:!0,confirmButtonText:"Si, eliminar!"}).then(t=>{t.isConfirmed&&E(e)})}async function E(e){const{estado:t,id:o,nombre:n}=e,a=new FormData;a.append("id",o),a.append("nombre",n),a.append("estado",t),a.append("proyectoId",u());try{const i=await(await fetch("/api/tarea/eliminar",{method:"POST",body:a})).json();i.resultado&&Swal.fire({title:"Eliminado!",text:i.mensaje,icon:"success"}),s=s.filter(d=>d.id!==e.id),l()}catch(r){console.log(r)}}function u(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}function S(){const e=document.querySelector("#listado-tareas");for(;e.firstChild;)e.removeChild(e.firstChild)}})();
//# sourceMappingURL=tareas-CT4lDB1o.js.map
