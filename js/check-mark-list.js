document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll('[data-check-mark-list] li');

    window.addEventListener('scroll', scrollHandler);

    function scrollHandler() {
        for (var x = 0; x < listItems.length; x++) {
            var listItem = listItems[x];
            if (!listItem.classList.contains('completed') && isInViewport(listItem)) {
                markIndexCompleted(x);
            }
        }
        if (document.querySelectorAll('[data-check-mark-list] li:not(.completed)').length === 0) {
            window.removeEventListener('scroll', scrollHandler);
        }
    }

    function markIndexCompleted(index) {
        for (var x = 0; x <= index; x++) {
            listItems[x].classList.add('completed');
        }
    }

    function isInViewport(element) {
        var bounding = element.getBoundingClientRect();
        return bounding.top >= 0 && bounding.bottom <= (window.innerHeight * 0.8 || document.documentElement.clientHeight * 0.8);
    }
});
