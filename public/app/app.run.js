angular.module('mindmapApp').run(['$rootScope', '$timeout', '$location', function($rootScope, $timeout, $location){

    $rootScope.showNavblock = false;

    $rootScope.changeNavblock = function(){
        $rootScope.showNavblock = !$rootScope.showNavblock;
        $location.path('/');
    }

    $rootScope.$on('$routeChangeStart', function(event, next, current){

        if(next.originalPath != '/' && next.originalPath != ''){
            $timeout(function(){
                $rootScope.showNavblock = true;
            }, 500);
        }

    });

}]);