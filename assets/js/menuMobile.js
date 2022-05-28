let menutoggle = document.querySelector('.toggle')
let showmenu = document.querySelector('nav')

menutoggle.addEventListener('click', () => {
    menutoggle.classList.toggle('active')
    showmenu.classList.toggle('show')
})

// let menuToggle = document.querySelector(".toggle");
//   let menu = document.querySelector(".desk-menu");

//   if (window.innerWidth < 800) {
//     menuToggle.onclick = () => {
//       menuToggle.classList.toggle("active");
//       menu.classList.toggle("show");
//     };

//     let menuList = document.querySelectorAll(".desk-menu li");

//     menuList.forEach((list) => {
//       list.addEventListener("click", (e) => {
//         menuToggle.classList.toggle("active");
//         menu.classList.toggle("show");
//       });
//     });
//   }