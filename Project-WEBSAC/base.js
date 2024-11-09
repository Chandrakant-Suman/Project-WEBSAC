// JavaScript for nav toggle and scroll animations

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
  
    // Toggle nav menu
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  
    // Initialize ScrollReveal animations
    ScrollReveal().reveal(".header__content h1", { delay: 200, distance: "50px", origin: "left" });
    ScrollReveal().reveal(".header__content p", { delay: 400, distance: "50px", origin: "right" });
    ScrollReveal().reveal(".header__btns", { delay: 600, distance: "50px", origin: "bottom" });
    ScrollReveal().reveal(".header__image img", { delay: 800, distance: "50px", origin: "bottom" });
  
    ScrollReveal().reveal(".promo", { delay: 300, distance: "50px", origin: "top" });
    ScrollReveal().reveal(".footer__col", { delay: 500, distance: "50px", origin: "bottom", interval: 200 });
  });
  