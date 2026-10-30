const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// ABRIR E FECHAR MENU
menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const menuAberto = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = menuAberto ? "✕" : "☰";

});


// FECHAR MENU AO CLICAR EM UM LINK
const links = document.querySelectorAll(".navbar a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

        menuToggle.textContent = "☰";

    });

});