/**
 * @file 开源项目经理
 * @author Marx
 */
marxBlog.controller('openSourseCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.openSourses = [
        {
            name: 'Vue单元测试环境',
            time: '2016 年 11 月 ',
            introduction: '使用karma + jasmine + webpack搭建的vue单元测试环境，并提供了基础vue单元测试关注点和测试case写法。该测试环境和开发环境隔离，理论上适用所有使用vue的开发环境。',
            link: 'https://github.com/MarxJiao/vue-karma-test',
            tags: ['单元测试', 'vue']
        },
        {
            name: 'Vue iscroll指令',
            time: '2016 年 11 月 ',
            introduction: '为Vue封装的iscroll指令。解决了在Vue项目中iscroll直接操作dom的问题，实现了指令跨钩子共享数据和多个指令间的数据隔离。项目已上传为npm包，方便其它开发者直接使用。',
            link: 'https://github.com/MarxJiao/vue-iscroll-directive',
            tags: ['vue指令', 'npm']
        },
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
