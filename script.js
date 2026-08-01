const slides = document.querySelectorAll(".slide");
let index = 0;

function changerImage() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(changerImage, 5000);

// Animation des éléments

const elements = document.querySelectorAll(".fade-in");

function apparition() {
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const hauteur = window.innerHeight;

        if (position < hauteur - 100) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", apparition);
window.addEventListener("load", apparition);