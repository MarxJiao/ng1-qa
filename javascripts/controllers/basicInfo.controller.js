/**
 * @file 基本信息控制器
 * @author Marx
 */
marxBlog.controller('basicCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.info = [
        {
            name: "公司",
            value: "一个简单可依赖的公司"
        },
        {
            name: "邮箱",
            value: "marxjiao@gmail.com"
        }
    ]
});
