angular.module('nodeihm').controller('NodeCtrl', ['$scope', '$css', 'breadcrumbs', function($scope, $css, breadcrumbs) {

    $scope.breadcrumbs = breadcrumbs;

    $css.bind({
        href: 'app/components/node/node.stl.css'
    }, $scope);

    $scope.nodes = [
        {
            url: '#/',
            label: 'Home',
            children:  [
                {
                    url: '#/page1',
                    label: 'Page 1'
                },
                {
                    url: '#/page2',
                    label: 'Page 2'
                },
                {
                    url: '#/page3',
                    label: 'Page 3'
                },
                {
                    url: '#/page4',
                    label: 'Page 4'
                },
                {
                    url: '#/',
                    label: 'Page 5',
                    children: [
                        {
                            url: '#/page5/page5-1',
                            label: 'Page 5-1'
                        },
                        {
                            url: '#/page5/page5-2',
                            label: 'Page 5-2'
                        }
                    ]
                },
                {
                    url: '#/',
                    label: 'Page 8',
                    children: [
                        {
                            url: '#/page8/page8-1',
                            label: 'Page 8-1'
                        },
                        {
                            url: '#/page8/page8-2',
                            label: 'Page 8-2'
                        }
                    ]
                }
            ]
        }

    ];

}]);