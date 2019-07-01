window.onload = function(e){
    var headerDom = document.querySelector('header'),
        submenuContainerDom = document.querySelector('[data-submenu="container"]');

    document.querySelector('[data-activate-menu]').addEventListener('click', function(){

        if (submenuContainerDom.classList.contains('active')) {
            headerDom.classList.toggle('submenu-active');
            submenuContainerDom.classList.toggle('active');
        }

        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
        headerDom.classList.toggle('sm-active');
    });

    submenuContainerDom.addEventListener('mouseenter', function(){
        headerDom.classList.toggle('submenu-hover');
    });
    submenuContainerDom.addEventListener('mouseleave', function(){
        headerDom.classList.toggle('submenu-hover');
    });

    var subMenuDom = document.querySelectorAll('[data-submenu]');

    for(var i=0; i< subMenuDom.length; i++) {
        subMenuDom[i].addEventListener('click', function(event){
            event.stopPropagation();
            submenuContainerDom.classList.toggle('active');
            headerDom.classList.toggle('submenu-active');
        });
    }
};
