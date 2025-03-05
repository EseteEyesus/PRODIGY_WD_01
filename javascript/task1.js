window.onload = () =>
  document.getElementById("loader").classList.add("hide-loader");

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});
        window.addEventListener("scroll", () => {
          const navbar = document.getElementById("navbar");
          if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        document.querySelectorAll(".reveal").forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
              section.classList.add("visible");
            }
          });
        });