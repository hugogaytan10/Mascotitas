const openMenu = async () => {
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
const cerrarMenu = async () => {
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
//VERIFICAR SI TENEMOS EL USUARIO LOGEADO
const UserLogin = async () => {
    try {
        let userParse = await verificarLocalUser();
        if (userParse != null) {
            this.document.getElementById("userName").textContent = userParse.name + " " + userParse.lastName;
            //APARECE EL BOTON DE OUT Y DESAPACERE EL DE ENTRAR
            this.document.getElementById('btn-entrar-pc').style.visibility = 'hidden';
            this.document.getElementById('btn-entrar-pc').style.transition = '0s';
            this.document.getElementById('btn-entrar-movil').style.visibility = 'hidden';
            //MOSTRAMOS UN MENSAJE DE QUE YA ESTA LOGEADO
            let msgPC = this.document.getElementById('bienvenidoPc');
            let msgMovil = this.document.getElementById('bienvenidoMovil');
            msgMovil.innerHTML = 'USUARIO LOGEADO';
            msgPC.innerHTML = 'USUARIO LOGEADO';
            msgPC.style.color = 'red';
            msgMovil.style.color = 'red';
        } else {
            this.document.getElementById('btn-out-pc').style.visibility = 'hidden';
            this.document.getElementById('btn-out-movil').style.visibility = 'hidden';
        }
    } catch (e) { console.log("Oh no, tuvimos un error, lo bueno... se trato :)") }

}

const verificarLocalUser = async () => {
    let datos = JSON.parse(localStorage.getItem('arreglo'));
    if (datos) {
        for (const element of datos) {
            if (element.login) {
                return element;
            }
        }
    }
    return null;
}
