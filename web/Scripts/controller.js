angular
    .module('controller.api', [])
    .controller('ApiController', function ($scope, ApiService) {
        $scope.cep = "99150000",
        $scope.complemento = null,
        $scope.city = null,
        $scope.bairro = null;
        $scope.findCep = function () {
            ApiService.get({ 'cep': $scope.cep }).$promise
                .then(function success(result) {
                    $scope.city = result.localidade;
                    $scope.bairro = result.bairro;
                    $scope.complemento = result.complemento;
                    $scope.logradouro = result.logradouro;
                    $scope.uf = result.uf;
                }).catch(function error(msg) {
                    console.error('Error');
                });
        }
    });