'use strict';
define(function(require) {
    'use strict';  
    return {
         setRoute:function($stateProvider){
            $stateProvider.state('task', {//任务主路由
                url: '/task',
                module: 'private',  //需要授权的
                data: {
                    css: ['']
                },
                views: {
                    '': {
                        templateUrl: 'modules/task/views/task.html',
                        controller: function($scope,$http) {
                           require(['taskCtr'],function(t){
                               $scope.$apply(t.init.call($scope,$scope,$http));
                           });
                        }
                    }
                }
            });
          }
     };
	
    
});