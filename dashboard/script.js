
const main = document.querySelector('.main');
const menu = document.querySelector('.toggle-menu');
const menuIcon = document.querySelector('.menu-icon');

function openMenu() {
    
    main.style.opacity= 0.2;
    menu.style.display= "block"

}

function closeMenu() {
    main.style.opacity= 1;
    menu.style.display= "none";

}

    document.addEventListener('mouseup', function(e){


        if((!menu.contains(e.target) && menuIcon.checkVisibility()) ){//check menu-icon display is block or not, display none == false
            main.style.opacity= 1;
            menu.style.display = 'none'
        }
    })

