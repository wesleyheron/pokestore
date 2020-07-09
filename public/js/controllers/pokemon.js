angular.module('pokestore').controller('PokemonController', function($scope, $http) {

	$scope.pokemonStore = {};
	$scope.count = 0;
	$scope.showFirstComment = false;
	$scope.showErroMessage = false;
	$scope.showSucceedAddedComment = false;
	$scope.showErrorAddedComment = false;
	$scope.message = '';
	$scope.errorMessage = '';

	const endPoint = 'https://pokeapi.co/api/v2/pokemon/';


	$scope.get = function () {
		$http({
			method: 'GET',
			url: endPoint
		}).then(function (pokemons) {        
            $scope.pokemons = pokemons.data.results;
            if($scope.pokemons.length > 0){
                $scope.pokemons.forEach((pokemon, index) => {
                    var id = $scope.pokemons[index].url.split('/')[6];
                    $scope.pokemons[index].image = "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png";
                    $scope.pokemons[index].price = Math.floor((Math.random() * 100) + 1).toFixed(2);
                })
            }
		}, function (error) {
			$scope.showErroMessage = true;
			$scope.errorMessage = error.statusText + ' ' + '(' + error.status + ')';
		});
	};

	 $scope.get();

	 $scope.add = function () {
	     $scope.pokemonStore.push($scope.pokemon);
	     $scope.message = result.message;
	     showAlertSuccess();
	 }

	 

	 function showAlertSuccess (){
		$scope.showSucceedAddedComment = true;
		$("#succeedMessage").fadeTo(2000, 500).slideUp(500, function() {
			$("#succeedMessage").slideUp(500);
			$scope.showSucceedAddedComment = false;
		  });		
	 };

	 function showAlertError (){
		$scope.showErrorAddedComment = true;
		$("#errorMessage").fadeTo(2000, 500).slideUp(500, function() {
			$("#errorMessage").slideUp(500);
			$scope.showErrorAddedComment = false;
		  });		
	 };
	 
});