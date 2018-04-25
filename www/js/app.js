// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .controller('controller', ['$scope', '$state', '$ionicTabsDelegate', '$ionicSlideBoxDelegate', function($scope, $state, $ionicTabsDelegate, $ionicSlideBoxDelegate) {

    $scope.activeSlide = 0;

    $scope.slideChanged = function(index) {
      $ionicTabsDelegate.select(index);
    };

    $scope.setSlide = function(index) {
      $ionicSlideBoxDelegate.slide(index);
    };
  }]);
