odoo.define('awesome_tshirt.PreviewImage', function (require) {
    "use strict";

    var FieldChar = require('web.basic_fields').FieldChar;
    var registry = require('web.field_registry');

    var PreviewImage = FieldChar.extend({
        _renderReadonly: function () {
            // implement some custom logic here
            console.log('Yeah!!!!');
            if (this.value) {
                var img = $('<img />',
                 { id: 'image-preview',
                   src: this.value,
                   width: 300
                 })
                  .appendTo(this.$el);
            }
            else {
                this.$el.html($('<p>IMAGE MISSING</p>'));

            }
        },
    });

    registry.add('image-preview-field', PreviewImage);
});