console.log('first');
setTimeout(() => {
  console.log('desconocido');
}, 40);

function unaFuncion() {
  console.log(' esta es una funcion');
}
unaFuncion();

console.log('second');
setTimeout(() => {
  console.log('desconocido 2');
}, 0);
console.log('third');
 