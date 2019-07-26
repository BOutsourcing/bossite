(function() {

    var Page = {

        setEmailAnchors: function() {
            var emailAnchors = document.querySelectorAll('[data-show-email]'),
                length = emailAnchors.length;

            for (var i = 0; i < length; i++) {
                var emailAnchor = emailAnchors[i],
                    to = emailAnchor.getAttribute('data-to'),
                    domain = emailAnchor.getAttribute('data-domain');

                if (to && domain) {
                    emailAnchor.setAttribute('href', 'mai' + 'lto:' + to + '@' + domain);
                }
            }
        },

        initialize: function() {
            this.setEmailAnchors();
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        Page.initialize();
    });
})();
