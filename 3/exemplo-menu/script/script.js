const buttonMenu = document.querySelector(".sidebar-menu__button");
const menu = document.querySelector(".sidebar-menu")

buttonMenu.addEventListener("click", function (evento) {

    evento.preventDefault ();
    
   if (menu.style.left === "-430px") {
       menu.style.left = "0px"
   }
   else {
        menu.style.left = "-430px"
   }
    
})



// menu.setAttribute(
//     "style", "font-size: 100px; font-style: italic; color:#ffff;"
// )


// let counter= 1;

// buttonMenu.addEventListener("click", function (evento) {

//     evento.preventDefault ();
    
//     sidebar.style.left = "-435px"
//     counter ++

//    if (counter % 2 !== 0 ) {
//        menu.style.left = "0px"
//    }
    
// })