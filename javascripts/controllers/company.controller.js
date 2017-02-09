/**
 * @file 工作经历
 * @author Marx
 */
marxBlog.controller('companyCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.company = [
        {
            time: "2016年9月 - 现在: ",
            position: '百度糯米 -- 前端开发工程师'
        },
        {
            time: "2015年6月 - 2016年8月: ",
            position: '百度质量部 -- 测试开发工程师'
        },
        {
            time: "2014年8月 - 2014年12月: ",
            position: '百度质量部 -- 实习'
        }
    ]
    document.getElementById('work').onClick = function (ev) {
        console.log($scope.localHash);
    }
});
