const navLinks = document.querySelector("#nav-links");
const navBar = document.querySelector(".nav-bar");
const nav = document.querySelector(".nav");

navBar.addEventListener("click", function () {
  if (navLinks.classList.contains("show-nav")) {
    navLinks.classList.remove("show-nav");
  } else {
    navLinks.classList.add("show-nav");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.remove("show-nav");
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 64;
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const windowHeight = this.window.pageYOffset;
  if (windowHeight > 720) {
    nav.style.backgroundColor = "rgba(0,0,0,0.7)";
    nav.style.transition = "all , 0.4s ease-in";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
