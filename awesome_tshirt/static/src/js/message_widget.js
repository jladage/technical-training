odoo.define('awesome_tshirt.message_widget', function (require) {
    "use strict";

    var core = require('web.core');
    var registry = require('web.widget_registry');
    var Widget = require('web.Widget');
    var qweb = core.qweb;
    var MessageWidget = Widget.extend({
        init: function (parent, record) {
            //access is_late field and set message text
            this._super.apply(this, arguments);
            this.record = record;
        },

        start: function () {
            this._render();
            return this._super.apply(this, arguments);
        },

        updateState: function (record) {
            this.record = record;
            this._render();
        },
        
        _render: function () {
            this.$el.empty();
            if (!this.record.data.image_url) {
                this.$el.append(qweb.render('WarningWidget.NoImage'));
            }
            if (this.record.data.amount > 100) {
                this.$el.append(qweb.render('WarningWidget.AddPromo'));
            }
        }
    });

    registry.add('message-widget', MessageWidget);
    return MessageWidget;
});
