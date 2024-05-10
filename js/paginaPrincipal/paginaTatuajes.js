document.addEventListener("DOMContentLoaded", function() {
    var avisoGalletitas = document.querySelector(".galletitas");
    var formGalletitas = document.getElementById("formGalletitas");


    if (!cookiesAceptadas()) {
        mostrar();
    }

    function mostrar() {
        avisoGalletitas.style.display = "block";
    }

    function aceptar(event) {
        event.preventDefault();
        avisoGalletitas.style.display = "none";
        almacenar();
    }

    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";
    }

    function almacenar() {
        var checkboxes = formGalletitas.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }
   
    formGalletitas.addEventListener("submit", aceptar);

  
    if (cookiesAceptadas()) {
        avisoGalletitas.style.display = "none";
    }

    function cerrarVentana(){
        window.close();
    }

    document.getElementById("bRechazar").addEventListener("click", cerrarVentana);

});