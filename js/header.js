const toggleBtn = document.querySelector(".navbar__toggleBtn");

const menu = document.querySelector("#navbar__list");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menu.classList.remove("clicked");
});

const links = document.querySelectorAll(".menu__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("clicked");
  });
});
