angular
    .module('service.api', [])
    .factory('ApiService', function ($resource) {
        var rest = $resource(
            'https://viacep.com.br/ws/:cep/json/',
            {
                'cep': ''
            }
        );
        return rest;
    });