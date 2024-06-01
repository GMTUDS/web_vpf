document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("idform");
    var datosIngresados = document.getElementById("datosIngresados");
    var botonHazlo = document.querySelector('#idform input[type="submit"]');

    botonHazlo.addEventListener("click", function(event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value.trim();
        var correo = document.getElementById("correo").value.trim();
        var comentario = document.getElementById("comentario").value.trim();

        var proposito = [];
        var checkboxes = document.getElementsByName("proposito");
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                proposito.push(checkbox.value);
            }
        });

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert("Email inválido");
            return;
        }

        if (nombre === "" || correo === "" || comentario === "" || proposito.length === 0) {
            alert("Campos obligatorios completos");
            return;
        }
        
        var propositoVida = proposito.join(" y ");

        datosIngresados.innerHTML = `
            <p>Nombre: ${nombre}</p>
            <p>E-mail: ${correo}</p>
            <p>Comentario: ${comentario}</p>
            <p>Propósito de la vida: ${propositoVida}</p>
        `;
        
        formulario.reset();
    });
});