const home = document.getElementById("home");
const about = document.getElementById("about");
const works = document.getElementById("works");
const contact = document.getElementById("contact");
const nav_2 = document.querySelector(".nav-2");
const navLinks = document.querySelector("#nav-links");
const navLink = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".nav-bar");
const nav = document.querySelector(".nav");
const sections = document.querySelectorAll("section");
const scrollLinks = document.querySelectorAll(".scroll-link");

navBar.addEventListener("click", function () {
  if (navLinks.classList.contains("show-nav")) {
    navLinks.classList.remove("show-nav");
    navBar.innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    navLinks.classList.add("show-nav");
    navBar.innerHTML = `<i class="fas fa-times"></i>`;
  }
});

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.remove("show-nav");
    navBar.innerHTML = `<i class="fas fa-bars"></i>`;
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    console.log(element);
    let position = element.offsetTop - 64;
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

// window.addEventListener("scroll", function () {
//   const windowHeight = this.window.pageYOffset;
//   if (windowHeight > 720) {
//     nav.style.backgroundColor = "rgba(0,0,0,0.7)";
//     nav.style.transition = "all , 0.4s ease-in";
//   } else {
//     nav.style.backgroundColor = "transparent";
//   }

// });

navLinks.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    navLink.forEach((link) => {
      link.classList.remove("active");
      e.target.classList.add("active");
    });
  }
});
// Observe home
const options = {};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
},
options);

sectionOneObserver.observe(home);

// observe about on scroll
// const options = {
//   rootMargin =
// };
// const aboutObserver = new IntersectionObserver(function (
//   entries,
//   aboutObserver
// ) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       navLink.forEach((link) => {
//         link.classList.remove("active");
//       });
//       nav_2.classList.add("active");
//     } else {
//       nav_2.classList.remove("active");
//     }
//   });
// },
// options);

// aboutObserver.observe(about);
