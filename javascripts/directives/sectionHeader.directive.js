/**
 * @file 每一个模块的标记指令，用于和左侧的导航进行交互
 * 
 * @author Marx
 */
marxBlog.directive('sec',function($location, $rootScope) {
    return {
        restrict: 'A',
        transclusion: true,
        link: function (scope, element, attrs) {
            
            // 右侧滚动时，将滚动位置的标记广播给app controller
            element.parent().parent().on('scroll', function (event) {
                var offTop = event.target.scrollTop - element[0].offsetTop;
                if (offTop > -50 && offTop < element[0].offsetHeight -50 ) {
                    $rootScope.localHash = element[0].innerText;
                    scope.$emit('changeHash', attrs.id);
                }
            })
        }
    }
})