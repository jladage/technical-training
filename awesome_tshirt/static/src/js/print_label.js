odoo.define('awesome_tshirt.PrintLabel', function (require) {
"use strict";

    var KanbanController = require('web.KanbanController');
    var registry = require('web.view_registry');

    var CustomersController = KanbanController.extend({
        init: function () {
            // Add button here
            console.log("I'm loaded...");
        }

    });

    var CustomersView = KanbanView.extend({
        config: _.extend({}, KanbanView.prototype.config, {
            Controller: CustomersController,
        }),
    });

    registry.add('customers_print', CustomersView);
    return CustomersView;
});
