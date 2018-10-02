odoo.define('awesome_tshirt.ChartWidget', function (require) {
    "use strict";

    var FieldChar = require('web.basic_fields').FieldChar;

    var PreviewImage = Fieldchar.extend({
        renderReadonly: function () {
            // implement some custom logic here
            console.log('Yeah!!!!   ')
        },
    });

    var fieldRegistry = require('web.field_registry');

    fieldRegistry.add('image-preview-field', PreviewImage);

});