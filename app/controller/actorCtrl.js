/**
 * @ngdoc controller
 * @name app.controller:actorCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('actorCtrl', function($scope,movieService,$routeParams){
        movieService.get({type:'person',id:$routeParams.id}).$promise.then(function(response){
            $scope.actor=response;
        })

    });
