odoo.define('awesome_tshirt.message_widget', function (require) {
    "use strict";

    var registry = require('web.widget_registry');
    var Widget = require('web.Widget');

    var MessageWidget = Widget.extend({
        init: function (parent, dataPoint) {
            //access is_late field and set message text
            this.data = dataPoint.data;
        },
        start: function () {
            this.$el.text(this.data.foo + "!");
        },
        updateState: function (dataPoint) {
            this.$el.text(dataPoint.data.foo + "!");
        },
    });

    registry.add('message-widget', MessageWidget);
});
