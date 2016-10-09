(function() {
	var app = angular.module('funwithcountries', []);

	app.factory('countryService', function($http){
		var baseUrl = 'services/'
		return {
			getCountries: function() {
				return $http.get(baseUrl + 'getCountries.php');
			}
		}
	})

	app.controller('CountryController', function(countryService) {
		var that = this;

		countryService.getCountries().success(function(data){
			that.countries = data;
		});
		 
	});

	app.controller('StateController', function(){
		this.addStateTo = function(country){
			if(!country.states) {
				country.states = [];
			}
			country.states.push({
				name: this.newState
			});
			this.newState = "";
		};
	});

})();