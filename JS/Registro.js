//EXPRESION PARA VALIDAR UN CORREO INSTITUCIONAL DEL ITSUR
const er = /^[SGEsge][0-9]{8}[@](alumnos.itsur.edu.mx)$/;
//EXPRESION PARA QUE TENGA 10 DIGITOS EL NUMERO TELEFONICO
const erphone = /^[+]?[0-9]{0,2}[0-9]{7,}/;
//ESTRUCTURA DEL OBJETO USUARIO
let objUsuario = {
    name: '',
    lastName: '',
    mail: '',
    phone: '',
    pass: '',
    login: false
};

//Mínimo Una letra mayuscula y un numero
const erPass = /^[A-Za-z]+[0-9]+/;
const login = async (device) => {
    event.preventDefault();
    //RESCATAMOS EL USUARIO Y CONTRASENIA 
    //DEPENDIENDO SI ES MOVIL O PC
    let mail = document.getElementById("email" + device).value;
    let pass = document.getElementById("password" + device).value;
    let msg = this.document.getElementById('bienvenido' + device);
    //SI SE ENCUENTRA EL USUARIO LE DAMOS LA BIENVENIDA
    try {
        //VERIFICAMOS EL USUARIO ASYNCRONO
        const user = await verificarUser(mail, pass);
        if (user) {
            msg.innerHTML = ("Bienvenido");
            msg.style.color = 'red';
        } else {
            //MOSTRAMOS EL MODAL DE USUARIO NO ENCONTRADO
            this.document.getElementById('modalNoEncontrado').style.visibility = 'visible';
            this.document.getElementById('bienvenido' + device).innerHTML = ("");
        }
        this.location.reload();
    } catch (e) { return false; }

}
const sigup = async () => {
    let msgAlert = 'Faltan los siguientes datos: ';
    event.preventDefault();
    let usuario = document.getElementById("name").value;
    let lastname = document.getElementById("lastName").value;
    let email = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let add = document.getElementById("address").value;
    let pass = document.getElementById("passwordSigup").value;
    if (usuario === "") {
        msgAlert += "<br/>Nombre vacio <br/>"
    }
    if (lastname === "") {
        msgAlert += "Apellido vacio <br/>"
    }
    if (phone === "") {
        msgAlert += "Telefono vacio <br/>"
    }
    if (add === "") {
        msgAlert += "Direccion vacia <br/>"
    }
    if (!email.match(er)) {
        msgAlert += "Formato de correo no valido <br/>";
    }
    if (!phone.match(erphone)) {
        msgAlert += "Formato de numero telefonico no valido <br/>"
    }
    if (!pass.match(erPass)) {
        msgAlert += "La contraseña debe contener al menos una letra y un número <br/>"
    }
    //registramos si todo es correcto
    if (usuario !== ""
        && email.match(er)
        && pass.match(erPass)
        && phone.match(erphone)
        && lastname !== ""
        && add !== "") {
        this.document.getElementById('datosFaltantes').innerHTML = "USUARIO AGREGADO";
        objUsuario = {
            name: usuario,
            lastName: lastname,
            mail: email,
            phone: phone,
            pass: pass,
            login: false
        };
        await insertar(objUsuario);
    } else {
        this.document.getElementById('datosFaltantes').innerHTML = msgAlert;
    }

}

const verificarUser = async (mail, pass) => {
    let datos = JSON.parse(localStorage.getItem('arreglo'));
    let auxDatos = [];
    let bandera = false;
    if (datos) {
        for (const element of datos) {
            if (element.mail == mail && element.pass == pass) {
                element.login = true;
                auxDatos.push(element);
                bandera = true;
            } else {
                auxDatos.push(element);
            }
        }
        if (bandera) {
            window.localStorage.removeItem('arreglo');
            window.localStorage.setItem('arreglo', JSON.stringify(auxDatos));
            return true;
        }
    }
    return false;
}

const insertar = async (obj) => {
    if (localStorage.getItem("arreglo") == null) {
        localStorage.setItem("arreglo", "[]");
    }
    let datos = JSON.parse(localStorage.getItem("arreglo"));
    datos.push(obj);
    localStorage.setItem("arreglo", JSON.stringify(datos));
}
//ABRIR MODAL EN MOVIL
const abrirModal = async () => {
    let abrir = document.getElementById('login');
    abrir.style.visibility = 'visible';
}
//CERRAR EL MODAL EN EL MOVIL DEL LOGIN
const cerrarModal = async () => {
    //como el boton tiene una transicion se la debemos quitar 
    //para que no se vea raro
    let btn = document.getElementById('btn-out-movil');
    btn.style.transition = 'all 0s';
    let cerrar = document.getElementById('login');
    cerrar.style.visibility = 'hidden';
}
//AGREGAR EL USUARIO QUE NO ENCONTRO
const modalAddUser = async (answer) => {
    const textInput = this.document.getElementById('emailPc').value !== '' ? this.document.getElementById('emailPc').value : this.document.getElementById('emailMovil').value;
    if (answer === 'SI') {
        this.document.getElementById('mail').value = textInput;
        this.document.getElementById('login').style.visibility = 'hidden';
        this.document.getElementById('modalNoEncontrado').style.visibility = 'hidden';
    } else {
        this.document.getElementById('modalNoEncontrado').style.visibility = 'hidden';
    }
}
//salirse de la sesion
const LogOut = async () => {
    let datos = JSON.parse(localStorage.getItem('arreglo'));
    let auxDatos = [];
    for (const element of datos) {
        if (element.login) {
            element.login = false;
            auxDatos.push(element);
        } else {
            auxDatos.push(element);
        }
    }
    console.log(auxDatos)
    window.localStorage.removeItem('arreglo');
    window.localStorage.setItem('arreglo', JSON.stringify(auxDatos));
    this.location.reload();
}