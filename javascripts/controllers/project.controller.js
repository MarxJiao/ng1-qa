/**
 * @file 项目经历控制器
 * @author Marx
 */
marxBlog.controller('projectsCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.projects = [
        {
            name: '百度H5',
            time: '2015 年 6 月-现在 ',
            content: '百度推出的移动端h5页面快速制作平台。负责前端测试工作。调研测试方案，使用protractor进行e2e自动化测试，组件化登录、删除等操作，方便不同测试用例调用。对开源NA端测试工具smallapple进行二次开发，使其适用于手机端网页自动化测试，加入测试回放，资源占用报警等功能。',
            tags: ['angular.js', 'grunt', 'protractor']
        },
        {
            name: '质量月报平台',
            time: ' 2016年1月至2016年2月 ',
            content: '百度ksarcrh-aq团队测试项目记录及数据展示平台。负责前端开发。使用前端MVC框架angular.js实现单页web应用，前后端分离。页面由bootstrap开发，支持响应式布局，数据通过highcharts.js直观展示为统计图表。项目由fis3构建，自动化实现压缩合并发布等操作。',
            tags: ['angular.js', 'fis', '单页应用']
        },
        {
            name: '用户视角分析平台',
            time: '2014年8月至2014年12月 ',
            content: '对各百度几十条产品线以及竞品在主流媒体的新闻报道及社交网络的舆情进行监控。设置预警机制，及时发现产品问题。负责前端开发。页面数据均为后台接口调取，通过Ajax与后台交互并用JavaScript解析输出到页面。通过逻辑判断，把用户操作记录并传给服务器做交互。',
            tags: ['jQuery', '前后端分离', 'bootstrap']
        }
    ];
});
