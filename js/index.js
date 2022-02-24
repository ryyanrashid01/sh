const hamburger = document.getElementById("navbarToggle");
const navLinks = document.getElementsByClassName("nav-links")[0];

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
