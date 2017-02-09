/**
 * @file 技术栈控制器
 * @author Marx
 */
marxBlog.controller('skillsCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.skills = [
        {
            name: 'javascript',
            rate: '80'
        },
        {
            name: 'HTML',
            rate: '85'
        },
        {
            name: 'CSS',
            rate: '85'
        },
        {
            name: 'node.js',
            rate: '30'
        },
        {
            name: 'photoshop',
            rate: '85'
        },
        {
            name: 'illustrator',
            rate: '70'
        }
    ];
});
