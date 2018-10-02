odoo.define('awesome_tshirt.PreviewImage', function (require) {
    "use strict";

    var FieldChar = require('web.basic_fields').FieldChar;
    var registry = require('web.field_registry');

    var PreviewImage = FieldChar.extend({
        _renderReadonly: function () {
            // implement some custom logic here
            if (this.value) {
                this.$el.html($('<img />',
                 { id: 'image-preview',
                   src: this.value,
                   width: 300
                 }));
            } else {
                this.$el.text(_("MISSING T-SHIRT DESIGN"));
                this.$el.addClass('alert-danger');
            }
        },
        /**
         * Overrides to force this field to be always visible, as when it is unset,
         * we want to display a warning.
         */
        isSet: function () {
            return true;
        },
    });

    registry.add('image-preview-field', PreviewImage);
    return PreviewImage;

});