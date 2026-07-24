const mobileMenu = document.querySelector('#mobile-menu');
const cerrarMenuBtn = document.querySelector('#cerrar-menu');
const sidebar = document.querySelector('.sidebar');

if (mobileMenu) {
  mobileMenu.addEventListener('click', function () {
    sidebar.classList.add('mostrar');
  });
}
if (cerrarMenuBtn) {
  cerrarMenuBtn.addEventListener('click', function () {
    sidebar.classList.remove('mostrar');
    sidebar.classList.add('ocultar');
    setTimeout(() => {
      sidebar.classList.remove('mostrar');
      sidebar.classList.remove('ocultar');
    }, 1000);
  });
}
