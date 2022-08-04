const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");

menu.addEventListener("click", () => {
    ul.classList.contains("hidden") ? ul.classList.remove("hidden") : ul.classList.add("hidden");
});