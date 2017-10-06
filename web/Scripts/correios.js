app.controller('MyController', ['$scope', '$http', function ($scope, $http) {
    $scope.users;
    var baseUrl = '/api/users';

    $http.get(baseUrl).then(function (response) {
        $scope.users = response.data;
    }, function (err) {
        console.log(err);
    });
}]);