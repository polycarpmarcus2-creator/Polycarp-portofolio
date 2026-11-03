const menuToggle = document.getElementById("mobile-menu");
const navlist = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    if (navlist.style.display === "flex") {
        navlist.style.display = "none";
    } else {
        navlist.style.display = "flex";
    }
});