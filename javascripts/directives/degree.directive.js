/**
 * @file 显示skill百分比的指令
 * 
 * @author Marx
 */
marxBlog.directive('degree',function($location, $rootScope) {
    return {
        restrict: 'E',
        template: '<svg width="100" height="100">'
            +     '<circle cx="50" cy="50" r="40" stroke="#C5E1A5" stroke-width="16" fill="none"/>'
            +     '<circle cx="50" cy="50" r="40" stroke="#8bc43a" transform="rotate(-90 50 50)" stroke-width="16" fill="none" stroke-dasharray="{{solid}} 700"/>'
            +     '<text x="50" y="50" fill="black" text-anchor="middle" dy=".3em" font-size="20" text-decoration="none">{{degree}}%</text>'
            + '</svg>',
        link: function (scope, element, attrs) {
            scope.degree = attrs.rate;

            // 计算实线长度 2 * 40 * Math.PI * attrs.rate / 100
            scope.solid = Math.PI * attrs.rate * 0.8
        }
    }
})