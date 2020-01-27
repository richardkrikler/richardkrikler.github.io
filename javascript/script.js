let nav = document.getElementsByTagName("nav")[0];

let menuBt = document.getElementById("menuBt");
menuBt.addEventListener("click", showMenu);

let menu = document.getElementById("menu");

function showMenu() {
    if (menu.classList == "") {
        nav.className = "visible";
        menu.className = "visible animated  tdFadeIn";
    } else {
        nav.className = "";
        menu.className = "visible animated  tdFadeOut";
        setTimeout(() => {
            menu.className = "";
        }, 100);
    }
}


