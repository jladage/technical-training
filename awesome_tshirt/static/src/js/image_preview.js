odoo.define('awesome_tshirt.ChartWidget', function (require) {
    "use strict";

    var FieldChar = require('web.basic_fields').FieldChar;

    var PreviewImage = FieldChar.extend({
        _renderReadonly: function () {
            // implement some custom logic here
            console.log('Yeah!!!!   ')
            var self = this;
            var img = $('<img />',
             { id: 'image-preview',
               src: this.value,
               width: 300
             })
              .appendTo(this.el);
        },
    });

    var fieldRegistry = require('web.field_registry');

    fieldRegistry.add('image-preview-field', PreviewImage);

});