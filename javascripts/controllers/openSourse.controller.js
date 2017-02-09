/**
 * @file 开源项目经理
 * @author Marx
 */
marxBlog.controller('openSourseCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.openSourses = [
        {
            name: '前端代码规范检查插件',
            time: '2016 年 5 月 ',
            introduction: '为visual studio code开发的前端代码检查插件。加入中英文切换和自动检查，使用者可根据自己习惯进行配置。',
            link: 'https://github.com/MarxJiao/VScode-fecs',
            tags: ['node.js', 'typescript']
        },
        {
            name: 'jQuery日期插件',
            time: '2015 年 11 月 ',
            introduction: '一个简单的jQuery日期插件，js代码只有400多行，注释占一半，思路清晰易懂，方便使用者进行二次开发，定制功能。100行css方便定制样式。',
            link: 'https://github.com/MarxJiao/date-picker',
            tags: ['jQuery插件', '面向对象']
        }
    ];
});
