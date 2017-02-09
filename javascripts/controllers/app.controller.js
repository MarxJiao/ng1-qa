/**
 * @file app控制器
 * @author Marx
 */
marxBlog.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log, $location, $window, $anchorScroll) {

         /**
         * loading动画控制
         */
        $scope.loading = true;
        $scope.changeLoadStatus = function () {
            $scope.loading = false;
        }
        $timeout(function () {
            $scope.loading = false;
            $scope.$apply();
        },10000)
        $scope.$watch('loading', function (status) {
            if (!status) {
                var resume = document.getElementById('resume-content').style.display;
                document.getElementById('resume-content').style.display = "flex";
                console.log(resume);
            }
        })


        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.localHash = $location.hash();
        $scope.$on('changeHash', function (event, data) {
            $scope.localHash = data;

            // 手动给$scope.localHash赋值后，需要强制$apply()
            $scope.$apply();
        })
        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
        }

        /**
         * 绑定锚点 $anchorScroll()
         */
        $scope.getAnchor = function (id) {

            // 点击后关闭导航
            $mdSidenav('left').close();

            $scope.localHash = id;
            $anchorScroll(id);
        }

       
        
    })
