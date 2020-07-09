angular.module('pokestore', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/pokemon', {
		templateUrl: 'views/home.html',
		controller: 'PokemonController'
	});

	$routeProvider.otherwise({ redirectTo: '/pokemon'});

});