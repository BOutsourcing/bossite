window.onload = function(e){
    document.querySelector('[data-activate-menu]').addEventListener('click', function(elem){
        var elem = document.querySelector('.active[data-submenu]');
        if(elem) {
            elem.classList.toggle('active');
            return;
        }
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
        document.querySelector('header').classList.toggle('sm-active');
    })
    var subMenuDom = document.querySelectorAll('[data-submenu]');
    for(var i=0; i< subMenuDom.length; i++) {
        subMenuDom[i].addEventListener('click', function(){
            var elem = document.querySelector('.active[data-submenu]');
            if(elem) {
                return;
            }
            this.classList.toggle('active');
        });
    }
}