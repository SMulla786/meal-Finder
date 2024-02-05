var angularApp = angular.module("myApp", ["ngRoute"]);
var jsonMeals;
angularApp.service("mealService", function ($http, $rootScope) {
  this.getMeals = function (searchInput) {
    return $http
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(function (response) {
        jsonMeals = response.data.meals;
        $rootScope.$broadcast("mealsUpdated", response.data.meals);
        return response.data.meals;
      });
  };
});

angularApp.controller("searchController", function ($scope, mealService) {
  $scope.SearchMeal = function () {
    let searchInput = document.getElementById("search-input");
    console.log(searchInput.value);
    mealService.getMeals(searchInput.value);
  };
});

angularApp.controller("cardController", function ($scope, $rootScope) {
  $rootScope.$on("mealsUpdated", function (event, meals) {
    $scope.meals = meals;
    console.log($scope.meals);
  });
});
angularApp.controller(
  "infoController",
  function ($scope, $routeParams, $rootScope) {
    console.log("hi");
    var mealId = $routeParams.id;
    $scope.meal = jsonMeals.filter((meal) => {
      if (meal.idMeal == mealId) {
        return true;
      }
    });
    console.log($scope.meal);
    $scope.ingredients = "";
    for (let index = 1; index < 21; index++) {
      if ($scope.meal[0][`strIngredient${index}`] != "") {
        $scope.ingredients +=
          $scope.meal[0][`strIngredient${index}`] +
          " (" +
          $scope.meal[0][`strMeasure${index}`] +
          "), ";
      }
    }
  }
);

angularApp.config([
  "$routeProvider",
  ($routeProvider) => {
    $routeProvider
      .when("/", {
        templateUrl: "homeTemplate.html",
        // controller: "cardController",
      })
      .when("/meal-info/:id", {
        templateUrl: "mealInfoTemplate.html",
        controller: "infoController",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);
