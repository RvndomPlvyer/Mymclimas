import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
alert("Hola");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$(document).ready(function () {
    // Smooth Scroll
    $("a").on('click', function(event) {
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash
            });
        }
    });

    // Enviar email
    $('#submit').click(function () {
        alert('El correo fue enviado correctamente');
    });

    // Cambiar backgroung-color al navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('bg-navbar');
        } else{
            $('.navbar').removeClass('bg-navbar');
        }
    })
});

