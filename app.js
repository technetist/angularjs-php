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
})();