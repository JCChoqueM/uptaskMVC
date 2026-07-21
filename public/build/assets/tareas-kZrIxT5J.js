(function(){p();let c=[];document.querySelector("#agregar-tarea").addEventListener("click",f);async function p(){try{const t=`/api/tareas?id=${u()}`;c=(await(await fetch(t)).json()).tareas,d()}catch(e){console.log(e)}}function d(){if(C(),c.length===0){const t=document.querySelector("#listado-tareas"),o=document.createElement("LI");o.textContent="No Hay Tareas En Este Proyecto",o.classList.add("no-tareas"),t.appendChild(o);return}const e={0:"Pendiente",1:"Completa"};c.forEach(t=>{const o=document.createElement("LI");o.dataset.tareaId=t.id,o.classList.add("tarea");const n=document.createElement("P");n.textContent=t.nombre;const a=document.createElement("DIV");a.classList.add("opciones");const r=document.createElement("BUTTON");r.classList.add("estado-tarea"),r.classList.add(`${e[t.estado].toLowerCase()}`),r.textContent=e[t.estado],r.dataset.estadoTarea=t.estado,r.ondblclick=function(){b({...t})};const s=document.createElement("BUTTON");s.classList.add("eliminar-tarea"),s.dataset.idTarea=t.id,s.textContent="Eliminar",s.ondblclick=function(){v({...t})},a.appendChild(r),a.appendChild(s),o.appendChild(n),o.appendChild(a),document.querySelector("#listado-tareas").appendChild(o)})}function f(){const e=document.createElement("DIV");e.classList.add("modal"),e.innerHTML=`
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
            </form>`,setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),e.addEventListener("click",function(t){t.preventDefault(),t.target.classList.contains("cerrar-modal")&&(document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{e.remove()},500)),t.target.classList.contains("submit-nueva-tarea")&&T()}),document.querySelector(".dashboard").appendChild(e)}function T(){const e=document.querySelector("#tarea").value.trim();if(e===""){l("El Nombre de la Tarea es Obligatorio","error",document.querySelector(".formulario legend"));return}y(e)}function l(e,t,o){const n=document.querySelector(".alerta");n&&n.remove();const a=document.createElement("DIV");a.classList.add("alerta",t),a.textContent=e,o.parentElement.insertBefore(a,o.nextSibling),setTimeout(()=>{a.remove()},3e3)}async function y(e){const t=new FormData;t.append("nombre",e),t.append("proyectoId",u());try{const a=await(await fetch("/api/tarea",{method:"POST",body:t})).json();if(l(a.mensaje,a.tipo,document.querySelector(".formulario legend")),a.tipo==="exito"){const r=document.querySelector(".modal");setTimeout(()=>{r.remove()},1e3);const s={id:String(a.id),nombre:e,estado:"0",proyectoID:a.proyectoId};c=[...c,s],d()}}catch(o){console.log(o)}}function b(e){const t=e.estado==="1"?"0":"1";e.estado=t,h(e)}async function h(e){const{estado:t,id:o,nombre:n}=e,a=new FormData;a.append("id",o),a.append("nombre",n),a.append("estado",t),a.append("proyectoId",u());try{const i=await(await fetch("/api/tarea/actualizar",{method:"POST",body:a})).json();i.respuesta.tipo==="exito"&&l(i.respuesta.mensaje,i.respuesta.tipo,document.querySelector(".contenedor-nueva-tarea")),c=c.map(m=>(m.id===o&&(m.estado=t),m)),d()}catch(r){console.log(r)}}function v(e){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&Swal.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success"})})}function u(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}function C(){const e=document.querySelector("#listado-tareas");for(;e.firstChild;)e.removeChild(e.firstChild)}})();
//# sourceMappingURL=tareas-kZrIxT5J.js.map
