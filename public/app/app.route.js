angular.module('mindmapApp').config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'app/components/pages/home/home.vw.html',
        controller: 'HomeCtrl',
        label: 'Home'
    }).when('/page1', {
        templateUrl: 'app/components/pages/page1/page1.vw.html',
        label: 'Page1'
    }).when('/page2', {
        templateUrl: 'app/components/pages/page2/page2.vw.html',
        label: 'Page2'
    }).when('/page3', {
        templateUrl: 'app/components/pages/page3/page3.vw.html',
        label: 'Page3'
    }).when('/page4', {
        templateUrl: 'app/components/pages/page4/page4.vw.html',
        label: 'Page4'
    }).when('/page5', {
        templateUrl: 'app/components/pages/page5/page5.vw.html',
        label: 'Page5'
    }).when('/page5/page5-1', {
        templateUrl: 'app/components/pages/page5/page5-1/page5-1.vw.html',
        label: 'Page5-1'
    }).when('/page5/page5-2', {
        templateUrl: 'app/components/pages/page5/page5-2/page5-2.vw.html',
        label: 'Page5-2'
    }).when('/page8', {
        templateUrl: 'app/components/pages/page8/page8.vw.html',
        label: 'Page8'
    }).when('/page8/page8-1', {
        templateUrl: 'app/components/pages/page8/page8-1/page8-1.vw.html',
        label: 'Page8-1'
    }).when('/page8/page8-2', {
        templateUrl: 'app/components/pages/page8/page8-2/page8-2.vw.html',
        label: 'Page8-2'
    }).otherwise({
        redirectTo: '/'
    });

}]);