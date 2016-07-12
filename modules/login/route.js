'use strict';
define(function(require) {
    'use strict';  
    return {
          setRoute:function($stateProvider){
             
             $stateProvider.state('login', {
				url: '/login',
				module: 'public',  //不需要授权的
				data: {
					css: ['']
				},
				views: {
					'': {
						templateUrl: 'modules/login/views/login.html',
						controller:  function($scope) {
                           require(['loginCtr'],function(t){
                               $scope.$apply(t.init.call($scope,$scope));
                           });
                        }
					}
				}
		     });
          }
     };
	
    
});