myApp.controller("PositionCtrl", ['$scope', '$stateParams', '$state', 'PositionService', function($scope, $stateParams, $state, PositionService) {
    const updatePosition = () => {
        const options = {
            data: {
                name: $scope.positionName
            },
            id: $stateParams.positionId            
        };
        
        PositionService.edit(options).then(() => {
            $state.go('home');
        }).catch(error => {
            alert('Erro ao atualizar posição');
        })
    };

    const init = () => {
        const id = $stateParams.positionId;

        if (id) {
            PositionService.find(id).then(response => {
                $scope.positionName = response.data.position.name;
            }).catch(error => {
                alert('Algo de Errado aconteceu');
            });
        }
    };

    const createPosition = () => {
        const data = {
            name: $scope.positionName
        }
        PositionService.store(data).then(response => {
            $state.go('home');
        }).catch(error => {
            alert('Erro ao criar posição');
        });
    }

    const submit = () => {
        const positionId =  $stateParams.positionId;

        if(positionId) {
            updatePosition()
        } else {
            createPosition()
        }
    }

    init();
    $scope.submit = submit;
}]);