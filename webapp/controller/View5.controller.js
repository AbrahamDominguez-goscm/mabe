sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("mabe.cedulainversa.controller.View5", {
            onInit: function () {

            },
            toNav: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteView6", null, true);
            }
        });
    });