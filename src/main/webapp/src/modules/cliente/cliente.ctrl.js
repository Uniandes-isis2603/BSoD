/* 
 * Controlador Cliente.
 */
(function(ng)
{
    var mod = ng.module("clienteModule");
    
    mod.controller("clienteCtrl", ['$scope', '$state', '$stateParams', '$http', 'clienteContext',
        function ($scope, $state, $stateParams, $http, clienteContext) 
    {
        $scope.records = {};                            // La lista de clientes no contiene ninguno.
        
        $http.get(clienteContext).then(function(response)      // Obtiene los clientes del sistema GET.
        {
            $scope.records = response.data;    
        }, responseError);
        
        if ($stateParams.clienteId !== null && $stateParams.clienteId !== undefined) 
        {
                id = $stateParams.clienteId;              // Toma el parametro id.
                
                $http.get(clienteContext + "/" + id)             // Obtiene el dato del recurso REST
                    .then(function (response) 
                    {  
                        $scope.currentRecord = response.data;    // Comando para actualizar el reccord que llega.
                    }, responseError);
        } 
        else
        {
            // Ajusta el record actual como un default.
            $scope.currentRecord = 
            {
                id: undefined,
                nombre: '',
                precio: undefined,
                direccion: '',
                telefono: undefined,
                tarjetaPuntos: null
            };
             
            $scope.alerts = [];
        }
        
        this.agregarCliente = function (id) 
        {
            currentRecord = $scope.currentRecord;        
            
            if (id == null) {

                    return $http.post(clienteContext, currentRecord)
                        .then(function () {
                       
                            $state.go('clienteList');
                        }, responseError);
                        
               
                } else {
                    
           
                    return $http.put(clienteContext + "/" + currentRecord.id, currentRecord)
                        .then(function () {
                   
                            $state.go('clienteList');
                        }, responseError);
                };
             
        };
        
        this.eliminarCliente = function(id)
        {
            return $http.delete(clienteContext+"/"+ id).then(function() 
            {
                $state.reload();
            }, responseError);
        };
        
        this.editarCliente = function()
        {
            currentRecord = $scope.currentRecord;
            id = $stateParams.clienteId;
            currentRecord.id = id;
            return $http.put(clienteContext, currentRecord).then(function() 
                    {
                        $state.go('clienteList');
                    }, responseError);
        }
        
        this.agregarTarjetaPuntosCliente = function(id)
        {
            return $http.post(clienteContext+"/"+ id+"/tarjetaPuntos").then(function() 
            {
                $state.reload();
            }, responseError);
        };

        this.eliminarTarjetaPuntosCliente = function(id)
        {
            return $http.delete(clienteContext+"/"+ id+"/tarjetaPuntos").then(function() 
            {
                $state.reload();
            }, responseError);
        };
        
     // -----------------------------------------------------------------
     // Funciones para manejra los mensajes en la aplicación


    //Alertas
    this.closeAlert = function (index) 
    {
        $scope.alerts.splice(index, 1);
    };

    // Función showMessage: Recibe el mensaje en String y su tipo con el fin de almacenarlo en el array $scope.alerts.
    function showMessage(msg, type) 
    {
        var types = ["info", "danger", "warning", "success"];
        if (types.some(function (rc) 
        {
            return type === rc;
        })) 
        {
            $scope.alerts.push({type: type, msg: msg});
        }
    }

    this.showError = function (msg) 
    {
        showMessage(msg, "danger");
    };

    this.showSuccess = function (msg) 
    {
        showMessage(msg, "success");
    };

    var self = this;
            
    function responseError(response)
    {
        self.showError(response.data);
            
    }
    
}]);

    

})(window.angular);
    
    