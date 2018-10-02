odoo.define('awesome_tshirt.PreviewImage', function (require) {
    "use strict";

    var FieldChar = require('web.basic_fields').FieldChar;
    var FieldBoolean = require('web.basic_fields').FieldBoolean;
    var registry = require('web.field_registry');

    var PreviewImage = FieldChar.extend({
        _renderReadonly: function () {
            // implement some custom logic here
            console.log('Yeah!!!!');
            if (this.value) {
                this.$el.html($('<img />',
                 { id: 'image-preview',
                   src: this.value,
                   width: 300
                 }));
            } else {

                this.$el.html($('<p>IMAGE MISSING</p>'));

            }
        },
    });

    var LateBoolean = FieldBoolean.extend({
        _renderReadonly: function () {
            this._super();
            if (this.value) {
                if (this.value == true){
                    //render green circle
                    console.log('Is late is true')

                } else {
                    console.log('Is late is false')
                    //render red cirle

                }
            }
        },
    });

    var IsLateMessage = Widget.extend({
        init: function (parent, dataPoint) {
            this.data = dataPoint.data;
        },
        start: function () {
            this.$el.text(this.data.foo + "!");
        },
        updateState: function (dataPoint) {
            this.$el.text(dataPoint.data.foo + "!");
        },
    });

    registry.add('image-preview-field', PreviewImage);
    registry.add('late-boolean', LateBoolean);

});