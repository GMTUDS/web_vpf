var imagenes = [
 
    "imagenes/MM4.jpeg",
    "imagenes/MM5.jpeg",
    "imagenes/MM6.jpeg",
    "imagenes/MM7.jpeg",
    "imagenes/MM8.jpeg",
    "imagenes/MM_10.jpeg",
    "imagenes/MM_11.jpeg",
    "imagenes/MM12.jpeg",
    "imagenes/MM13.jpeg",
    "imagenes/MM14.jpeg",
    "imagenes/MM1.jpeg",
    "imagenes/MM2.jpeg"


]

var index = 0 
var carruselImg = document.getElementById("carrusel_Imagenes")

function cargarImagenes() {
    
    carruselImg.innerHTML = "";
   
    for (var i = index; i < index + 4; i++) {
         var img = document.createElement("img");
       
        img.src = imagenes[i];
        img.alt="carrusel roto"+(i+1);
        carruselImg.appendChild(img);
    }
}
avanzaAuto();

function imagenAnterior() {
    if (index >= 4) {
        index -= 4;
        cargarImagenes();
    }
}

function imagenSiguiente() {
    if (index + 4 < imagenes.length) {
        index += 4;
        cargarImagenes();
    }else{
        index = 0;
        cargarImagenes();
    }
}



function avanzaAuto(){
    setInterval( function(){
        imagenSiguiente();
    }, 4000 )
}



avanzaAuto();


document.addEventListener("DOMContentLoaded", function () {
    var emerg = document.getElementById("vnt");
    var btnCerrar = document.querySelector(".btn_cerrar");
    var formContacto = document.getElementById("frm_contacto");
    var respuesta = document.getElementById("respuesta");
    var botonContacto = document.getElementById("boton_contacto");


    botonContacto.onclick = function () {
        emerg.style.display= "block";
    };


    btnCerrar.onclick= function(){
        emerg.style.display = "none";
    }

    window.onclick = function (event){
        if(event.target == emerg){
            emerg.style.display= "none";
        }


    };

    formContacto.addEventListener("submit", function(event){
        event.preventDefault();

        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var telefono = document.getElementById("telefono");
        var email = document.getElementById("email");

        if (nombre.value === "" || apellido.value === "" || telefono.value === "" || email.value === ""){
            respuesta.innerHTML= "Campos obligatorios incompletos";
            return;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)){
            respuesta.innerHTML = "Email invalido";
            return;
        }

        var telefonoRegex= /^\d{8,12}$/;
        if(!telefonoRegex.test(telefono.value)){
            respuesta.innerHTML = "Número de telefono Invalido - Ingrese un número valido";
            return;
        }



        respuesta.innerHTML = "";
        var datosEnviados = document.createElement("p");
        datosEnviados.innerHTML = "Nombre: "+ nombre.value + "<br>" + "Apellido: " + apellido.value + "<br>" + "Telefono: " + telefono.value + "<br>" + "Correo: " + email.value;
        respuesta.appendChild(datosEnviados);


        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        email.value = "";

    });
    cargarImagenes();
});


