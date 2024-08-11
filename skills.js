
/*
document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos con la clase skills__title
    const skillsTitles = document.querySelectorAll('.skills__title');

    // Iterar sobre cada elemento y agregar el evento mouseover
    skillsTitles.forEach(function (title) {
        title.addEventListener('mouseover', function () {
            // Encontrar el elemento de la barra de progreso correspondiente
            const progressBar = title.nextElementSibling.querySelector('.skills__percentage');

            // Obtener el porcentaje del elemento de texto
            const percentage = parseInt(title.querySelector('.skills__number').textContent);

            // Calcular el ancho de la barra de progreso para que comience desde 0%
            const width = (percentage / 100) * progressBar.parentElement.clientWidth;

            // Establecer el ancho de la barra de progreso
            progressBar.style.width = width + 'px';
        });
    });
});

*/