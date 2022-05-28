let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector("nav");

if (window.innerWidth <= 800) {
    
    menuToggle.onclick = () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("show");

};

let menuList = document.querySelectorAll("nav ul li");
    menuList.forEach((list) => {
        list.addEventListener("click", (e) => {

            menuToggle.classList.toggle("active");
            menu.classList.toggle("show");

        });
    });
}