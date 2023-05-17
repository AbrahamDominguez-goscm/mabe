sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("mabe.cedulainversa.controller.App", {
        onInit() {
          var oJSONModel = new sap.ui.model.json.JSONModel(
            { TipoDevolucion: [
              {title:"Paqueteras home delivery"},
              {title:"Nacionales"}
            ],
              NegativoEntrega: [
                {title:"Si"},
                {title:"No"}
            ],
              EstadoFisico: [
              {title:"Si"},
              {title:"No"}
            ],
              RellenoTabla: [
                {producto: "Producto1", proveedor:"Proveedor1", dimenciones:"Dimenciones1"},
                {producto: "Producto2", proveedor:"Proveedor2", dimenciones:"Dimenciones2"},
                {producto: "Producto3", proveedor:"Proveedor3", dimenciones:"Dimenciones3"}
            ],
              ListaFotos: [
                {key:"1", text:"Foto 1"},
                {key:"2", text:"Foto 2"},
                {key:"3", text:"Foto 3"}
              ]
            
          }
          );
				  this.getOwnerComponent().setModel(oJSONModel,"jsonModelConfig");

        }
      });
    }
  );
  