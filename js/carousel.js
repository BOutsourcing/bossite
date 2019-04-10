jQuery(document).ready(function() {

    $('#carouselComponent').on('slide.bs.carousel', function(event) {
        var $e = $(event.relatedTarget),
            idx = $e.index(),
            itemsPerSlide = 3,
            totalItems = $('.carousel-item').length;

        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);

            for (var i = 0; i < it; i++) {
                // append slides to end
                if ('left' === event.direction) {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
});
