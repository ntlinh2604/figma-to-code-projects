const menu = document.querySelector('.toggle-menu');
const menuIcon = document.querySelector('.menu-icon');

function openMenu() {
    return menu.style.display= "block"

}

function closeMenu() {
    return menu.style.display= "none";

}

    document.addEventListener('mouseup', function(e){


        if((!menu.contains(e.target) && menuIcon.checkVisibility()) ){//check menu-icon display is block or not, display none == false
            menu.style.display = 'none'
        }
    })

