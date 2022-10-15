function openMenu(){
    let iconMenu = document.getElementById('openMenu');
    let nav = document.getElementById("nav-menu");
    let overlay = document.getElementById("contenedor-header");
    //ocultamos el icono del menu
    iconMenu.style.visibility = 'hidden';
    //desplegamos el fondo gris que sirve como overlay
    overlay.style.width = '100%';
    //ponemos las propiedades del contenedor del menu
    nav.style.visibility = 'visible';
    nav.style.width = '70%';
}
function cerrarMenu(){
    let iconMenu = document.getElementById('openMenu');
    let nav = document.getElementById("nav-menu");
    let overlay = document.getElementById("contenedor-header");
    iconMenu.style.visibility = 'visible';
    //desplegamos el fondo gris que sirve como overlay
    overlay.style.width = '0%';
    overlay.visibility = 'hidden';
    //ponemos las propiedades del contenedor del menu
    nav.style.transition = 'all 0s';
    nav.style.visibility = 'hidden';
    nav.style.width = '0%';
}