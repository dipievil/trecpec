var app = angular.module('cepApp', ['controller.api', 'service.api','ngResource']);
/*
var app = angular.module('cepApp', [, 'service.api', 'ngResource']);

var app = angular.module('cepApp', ['ngResource'])
    .controller('myCtrl', function ($scope, myResource) {
        $scope.cep = "99150000", $scope.city = null;
        $scope.findCep = function () {
            myResource.get({ 'cep': $scope.cep }).$promise
                .then(function success(result) {
                    $scope.city = result;
                }).catch(function error(msg) {
                    console.error('Error');
                });
        }
    }).factory('myResource', function ($resource) {
        var rest = $resource(
            'https://viacep.com.br/ws/:cep/json/',
            {
                'cep': ''
            }
        );
        return rest;
    });
*/