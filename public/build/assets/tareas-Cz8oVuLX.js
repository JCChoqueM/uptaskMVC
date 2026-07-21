(function(){p();let s=[];document.querySelector("#agregar-tarea").addEventListener("click",f);async function p(){try{const t=`/api/tareas?id=${u()}`;s=(await(await fetch(t)).json()).tareas,i()}catch(e){console.log(e)}}function i(){if(v(),s.length===0){const t=document.querySelector("#listado-tareas"),a=document.createElement("LI");a.textContent="No Hay Tareas En Este Proyecto",a.classList.add("no-tareas"),t.appendChild(a);return}const e={0:"Pendiente",1:"Completa"};s.forEach(t=>{const a=document.createElement("LI");a.dataset.tareaId=t.id,a.classList.add("tarea"),a.classList.add(`materia-${(t.materia||"general").trim()}`);const n=document.createElement("P");n.textContent=(t.nombre||"").trim();const o=document.createElement("DIV");o.classList.add("opciones");const r=document.createElement("BUTTON");r.classList.add("estado-tarea"),r.classList.add(`${e[t.estado].toLowerCase()}`),r.textContent=e[t.estado],r.dataset.estadoTarea=t.estado,r.ondblclick=function(){b({...t})};const c=document.createElement("BUTTON");c.classList.add("eliminar-tarea"),c.dataset.idTarea=t.id,c.textContent="Eliminar",o.appendChild(r),o.appendChild(c),a.appendChild(n),a.appendChild(o),document.querySelector("#listado-tareas").appendChild(a)})}function f(){const e=document.createElement("DIV");e.classList.add("modal"),e.innerHTML=`
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
            </form>`,setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),e.addEventListener("click",function(t){t.preventDefault(),t.target.classList.contains("cerrar-modal")&&(document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{e.remove()},500)),t.target.classList.contains("submit-nueva-tarea")&&y()}),document.querySelector(".dashboard").appendChild(e)}function y(){const e=document.querySelector("#tarea").value.trim();if(e===""){l("El Nombre de la Tarea es Obligatorio","error",document.querySelector(".formulario legend"));return}T(e,materiaProyecto)}function l(e,t,a){const n=document.querySelector(".alerta");n&&n.remove();const o=document.createElement("DIV");o.classList.add("alerta",t),o.textContent=e,a.parentElement.insertBefore(o,a.nextSibling),setTimeout(()=>{o.remove()},3e3)}async function T(e,t){const a=new FormData;a.append("nombre",e),a.append("proyectoId",u()),a.append("materia",t);try{const r=await(await fetch("/api/tarea",{method:"POST",body:a})).json();if(l(r.mensaje,r.tipo,document.querySelector(".formulario legend")),r.tipo==="exito"){const c=document.querySelector(".modal");setTimeout(()=>{c.remove()},1e3);const d={id:String(r.id),nombre:e,estado:"0",proyectoID:r.proyectoId,materia:t};s=[...s,d],i()}}catch(n){console.log(n)}}function b(e){const t=e.estado==="1"?"0":"1";e.estado=t,h(e)}async function h(e){const{estado:t,id:a,nombre:n}=e,o=new FormData;o.append("id",a),o.append("nombre",n),o.append("estado",t),o.append("proyectoId",u());try{const d=await(await fetch("/api/tarea/actualizar",{method:"POST",body:o})).json();d.respuesta.tipo==="exito"&&l(d.respuesta.mensaje,d.respuesta.tipo,document.querySelector(".contenedor-nueva-tarea")),s=s.map(m=>(m.id===a&&(m.estado=t),m)),i()}catch(r){console.log(r)}}function u(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}function v(){const e=document.querySelector("#listado-tareas");for(;e.firstChild;)e.removeChild(e.firstChild)}})();
//# sourceMappingURL=tareas-Cz8oVuLX.js.map
