angular.module('nodeihm').directive('ngBreadcrumb', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            breadcrumbs: '='
        },
        templateUrl: 'app/shared/breadcrumb/breadcrumb.vw.html',
        css: 'app/shared/breadcrumb/breadcrumb.stl.css'
    };
});