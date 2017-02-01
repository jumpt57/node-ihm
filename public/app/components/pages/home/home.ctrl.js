angular.module('nodeihm').controller('HomeCtrl', ['$scope', '$css', function($scope, $css) {
    $css.bind({
        href: 'app/components/pages/home/home.stl.css'
    }, $scope);
}]);