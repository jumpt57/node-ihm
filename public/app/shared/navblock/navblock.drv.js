angular.module('mindmapApp').directive('ngNavblock', function(){
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            nodes: '='
        },
        templateUrl: 'app/shared/navblock/navblock.vw.html',
        css: 'app/shared/navblock/navblock.stl.css',
    };
});