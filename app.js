const only_for_home = document.querySelector(".only_for_home");
const content_children = document.querySelectorAll(".content");
const nav_itmes = document.querySelectorAll(".nav_item");
const navChange = (e) => {
  nav_itmes.forEach((nav) => nav.classList.remove("nav_active"));
  document.getElementById(e.target.id).classList.add("nav_active");
  const navbar = e.target.id.split("_");
  content_children.forEach((child) => {
    child.classList.add("hide");
    child.classList.remove("show");
  });
  document.getElementById(`${navbar[1]}_content`).classList.add("show");
  if (navbar[1] === "home") {
    only_for_home.classList.remove("hide");
    only_for_home.classList.add("show");
  } else {
    only_for_home.classList.remove("show");
    only_for_home.classList.add("hide");
  }
};

document
  .querySelector(".visit_site")
  .addEventListener("click", () => window.open("https://yaarme.com/login/"));

nav_itmes.forEach((item) => item.addEventListener("click", navChange));
