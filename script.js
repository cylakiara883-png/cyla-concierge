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
function envoyerWhatsApp() {

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const vehicule = document.getElementById("vehicule").value;
    const debut = document.getElementById("debut").value;
    const fin = document.getElementById("fin").value;
    const message = document.getElementById("message").value;

    const texte =
`Bonjour Cyla Concierge,

Nom : ${nom}

Email : ${email}

Téléphone : ${telephone}

Véhicule : ${vehicule}

Du : ${debut}

Au : ${fin}

Demande :

${message}`;

    const url =
`https://wa.me/243810061720?text=${encodeURIComponent(texte)}`;

    window.open(url, "_blank");
}

function envoyerWhatsApp() {

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const vehicule = document.getElementById("vehicule").value;
    const debut = document.getElementById("debut").value;
    const fin = document.getElementById("fin").value;
    const message = document.getElementById("message").value;

    const texte = `Bonjour Cyla Concierge,

Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}

Véhicule : ${vehicule}

Date de début : ${debut}
Date de fin : ${fin}

Demandes particulières :
${message}`;

    const url = "https://wa.me/243810061720?text=" + encodeURIComponent(texte);

    window.open(url, "_blank");
}
function changerImage(source){

    document.getElementById("grande-image").src = source;

}