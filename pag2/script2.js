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
    
});

document.addEventListener("DOMContentLoaded", function(){

    var btn_mg = document.querySelectorAll("#btn_mg");
    var cont_mg = document.querySelectorAll("#cont_mg");
    
    btn_mg.forEach(function(btn, index){
        btn.addEventListener("click", function(){
        var contador = cont_mg[index];
        contador.textContent = parseInt(contador.textContent)+1;    

        
    });
});
});
document.addEventListener("DOMContentLoaded", function(){
    var btn_comentar = document.querySelectorAll(".comentario button.btn_comentar");
    
    btn_comentar.forEach(function(btn_comentar, index){
        btn_comentar.addEventListener("click", function(){
            var input_comentario = btn_comentar.previousElementSibling;
            var texto_comentario = input_comentario.value.trim();
            if (texto_comentario !== "") {
                var lista_comentarios = btn.parentElement.querySelector(".lista_comentarios");
                var nuevo_comentario = document.createElement("li");
                nuevo_comentario.textContent = texto_comentario;
                lista_comentarios.appendChild(nuevo_comentario);
                input_comentario.value = "";
            }
        });
    });
});