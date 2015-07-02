dashboardApplication.controller('MainController', function ($scope, $location, $route) {
	var pages = [];

	$scope.pages = pages;
	$scope.activePage = pages.filter(function (page) {
		return $location.path().indexOf(page.path) == 0;
	})[0];

	$scope.redirect = function (page) {
		$location.path(page.path);
		$scope.activePage = page;
	};

});
