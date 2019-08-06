$(function() {
    var tabsContainer = $('#navTabs'),
        controlNext = tabsContainer.find('#controlNext'),
        controlPrev = tabsContainer.find('#controlPrev'),
        showNextTab = function() {
            var currentStep = $('.nav-tab.active');

            currentStep.css('transform','translateX(-120%)');
            currentStep.next('.nav-tab').tab('show');

            if (0 === currentStep.next('.nav-tab').next('.nav-tab').length) {
                controlNext.hide();
            }

            if (controlPrev.is(':hidden')) {
                controlPrev.show();
            }
        },
        showPreviousTab = function() {
            var currentStep = $('.nav-tab.active');

            currentStep.css('transform','translateX(120%)');
            currentStep.prev('.nav-tab').tab('show');

            if (0 === currentStep.prev('.nav-tab').prev('.nav-tab').length) {
                controlPrev.hide();
            }

            if (controlNext.is(':hidden')) {
                controlNext.show();
            }
        };

    controlPrev.hide();
    controlNext.on('click', showNextTab);
    controlPrev.on('click', showPreviousTab);
});
