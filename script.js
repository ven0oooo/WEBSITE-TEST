
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuToggle.textContent = nav.classList.contains("open")
        ? "✕"
        : "☰";
});

// Fermer le menu après avoir cliqué sur un lien
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

// Formulaire de démonstration
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent =
        "Formulaire de démonstration : aucun message n'a été envoyé.";

    contactForm.reset();
});
