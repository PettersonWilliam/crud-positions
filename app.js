//importando o angular definindo ela com o angular.module e definindo tbm os pacotes que irao seer usados como ui.router.
const myApp = angular.module("positionApp", ["ui.router"]); // ui.router -- BIBLIOTECA - LIB

myApp.config(function ($stateProvider) {
  $stateProvider.state({
    name: "home", // nome do estado, estando ativo
    url: "", // nesta url sendo ativa
    templateUrl: "views/home.html", // o html que vai ser renderizado
    controller: "HomeCtrl", // ultilizando o controller , onde fica toda nossa logica
  })

  $stateProvider.state({
    name: "position",
    url: "/position/?{positionId}", // ? serve para quando o valor não obrigatório.
    templateUrl: "views/positionUpdate.html",
    controller: "PositionCtrl",
  });
});

