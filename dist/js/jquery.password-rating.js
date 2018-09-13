jQuery.fn.passwordRating = function (options) {

    var defaults = {
        selectors: {
            passwordFieldSelector: '.password-rating-field',
        },
        settings: {

        },
    };

    var settings = $.extend({}, defaults, options);

    var methods = {
        init: function (element) {
            var me = this;

            methods.registerEvents(element);
        },

        registerEvents: function (element) {
            var me = this;
            var passwordField = $($(element).find(settings.selectors.passwordFieldSelector)[0]);

            passwordField.on("input", $.proxy(me.onPasswordChanged, me, element));
        },

        onPasswordChanged: function(element) {
            var passwordField = $($(element).find(settings.selectors.passwordFieldSelector)[0]);
            var regexValue = passwordField.data("passwordregex");
        },
    };

    return this.each(function () {
        methods.init($(this));
    });
};