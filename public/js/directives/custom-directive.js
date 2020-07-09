angular.module('customDirective', [])
.directive('painel', function() {

	var ddo = {};
	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = './views/painel.html';

	return ddo;

})
.directive('myComment', function() {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
    
    return ddo;
});