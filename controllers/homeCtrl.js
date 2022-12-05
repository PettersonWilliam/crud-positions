myApp.controller("HomeCtrl", ['$scope','PositionService', function($scope, PositionService) {
    const list = () => {
        PositionService.getData().then(response => {
            $scope.positionsName = response.data.position;
        }).catch(error => {
            alert('Algo de Errado aconteceu');
        });
    };

    const deletePosition = id => {
        PositionService.deletePosition(id).then(response => {
            list();
        });
    
    };

    $scope.deletePosition = deletePosition;
    
    list();
}]);