document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector('.hamburger');
    let nav1 = document.querySelector(".navbar-phone");

    btn.addEventListener('click', () => {
        nav1.classList.toggle('show');
    });
});

const enlaces = document.querySelectorAll('.play');
const audiohumano = document.querySelector("#audiohumano");
const audioboss = document.querySelector("#audioboss")

enlaces.forEach((cadaid, i) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.id == "humano") {
            audiohumano.play();
        } else if (e.target.id == "boss") {
            audioboss.play();
        }
    })
})

const bloque = document.querySelectorAll('.bloque');
const h3 = document.querySelectorAll('.h3');

h3.forEach((cadah3, i) => {
    h3[i].addEventListener('click', () => {
        bloque.forEach((cadaBloque, i) => {
            bloque[i].classList.remove('activo');
        });
        bloque[i].classList.add('activo');

    });
});