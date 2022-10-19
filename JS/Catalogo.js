let positionUser;
let imgAux;
const ChangeImgInitial = async (img) => {
    let currentImg = this.document.getElementById('currentImg');
    currentImg.src = img;
}
const ChangeImgMouseLeve = async () => {
    let currentImg = this.document.getElementById('currentImg');
    currentImg.src = imgAux;
}
const ChangeTitle = async (title) => {
    this.document.getElementById('titleDetails').textContent = title;
}
const ClosePopUpDetails = async () => {
    if (this.window.screen.width < 500) {
        //RETORNAMOS A SU POSICION INICIAL AL USUARIO
        this.document.getElementById(positionUser).scrollIntoView();
        //LIMPIAMOS EL ARREGLO AUXILIAR
        positionUser = '';
        this.document.getElementById('detallesProducto').style.visibility = 'hidden';
        //quitamos el overlay 
        this.document.getElementById('overlay-detalles-producto').style.backgroundColor = 'none';
        this.document.getElementById('overlay-detalles-producto').style.visibility = 'hidden';
        //habilitamos el scroll nuevamente
        await enableScroll();
    }
}
const ClosePopUpDetailsOverlay = async () => {
    if (this.window.screen.width > 500) {
        //RETORNAMOS A SU POSICION INICIAL AL USUARIO
        this.document.getElementById(positionUser).scrollIntoView();
        //LIMPIAMOS EL ARREGLO AUXILIAR
        positionUser = '';
        this.document.getElementById('detallesProducto').style.visibility = 'hidden';
        //quitamos el overlay 
        this.document.getElementById('overlay-detalles-producto').style.backgroundColor = 'none';
        this.document.getElementById('overlay-detalles-producto').style.visibility = 'hidden';
        await enableScroll();
    }

}
const OpenPopUpDetails = async (img, title, idProduct) => {
    //ALMACENAMOS LA IMAGEN AUX 
    imgAux = img;
    //CAMBIAMOS LA IMAGEN PRINCIPAL
    await ChangeImgInitial(img);
    //CAMBIAMOS EL TITULO PRINCIPAL
    await ChangeTitle(title);
    //MOSTRAMOS EL POPUP
    this.document.getElementById('detallesProducto').style.visibility = 'visible';
    //almacenamos la posicion del usuario para despues regresarlo a su poscion original
    positionUser = idProduct;
    //HACEMOS SCROLL AL INICIO DE LA PAGINA
    this.window.scroll(0, 0);
    //bloqueamos el scroll
    await disableScroll();
    //ponemos el overlay 
    this.document.getElementById('overlay-detalles-producto').style.visibility = 'visible';
    this.document.getElementById('overlay-detalles-producto').style.backgroundColor = 'rgba(139, 134, 134, 0.5)';

}

const disableScroll = async () => {
    this.window.onscroll = function () {
        this.window.scrollTo(0, 0);
    }
}
const enableScroll = async () => {
    this.window.onscroll = null;
}