/**
 * @file 工作经历
 * @author Marx
 */
marxBlog.controller('companyCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.company = [
        {
            time: "2015年6月 - 现在: ",
            position: '百度 -- 前端测试开发工程师'
        },
        {
            time: "2014年8月 - 12月: ",
            position: '百度 -- 实习'
        }
    ]
    document.getElementById('work').onClick = function (ev) {
        console.log($scope.localHash);
    }
});
