angular.module('MyApp')
.controller('ContactCtrl', function($scope, $http) {
  $scope.starting = true;

  $scope.map = {
    center: { latitude: 39.0997, longitude: -94.5786 },
    zoom: 4,
    markers: $scope.pokemon,
    markersEvents: {
            click: function(marker, eventName, model, arguments) {
                $scope.map.window.model = model;
                $scope.map.window.show = true;
                $scope.map.window.options.id = model.id;
                $scope.$apply();
            }
        },
        window: {
            marker: {},
            show: false,
            closeClick: function() {
                this.show = false;
            },
            options: {}
        }
  };
  $scope.pokemon = []
  // $scope.pokemon = [{id: 1, latitude: 19.2343243, longitude: 20.2342343243, poke_name: 'Mewtwo', icon: '../images/150.png'}, {id: 2, latitude: 20.24324234, longitude: 19.2432432, poke_name: 'Pikachu', icon: '../images/025.png'}]
  $scope.options = {scrollwheel: true};

  $scope.search = function(location) {
    $scope.starting = false;
    $scope.map.window.show = false;
    $scope.pokemon = []
    $scope.loading = true;
    $scope.tryagain = false;
    $http.get('http://findemall-server.herokuapp.com/api/testing/' + location).success(function(data) {
      $scope.searchLocation = ''
      $scope.pokemon = data.pokemon_close;
      $scope.loading = false;
    }).error(function(data) {
      $scope.loading = false;
      $scope.tryagain = true;
    })
  }

  $scope.poke_name = 'Rayhorn'

  // $scope.windowOptions = {
  //   visible: false
  // };

  // $scope.onClick = function() {
  //   $scope.windowOptions.visible = !$scope.windowOptions.visible;
  // };

  // $scope.closeClick = function() {
  //   $scope.windowOptions.visible = false;
  // };

});
