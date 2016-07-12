'use strict';
define([
    'angular',
], function(angular) {
    'use strict';
    //  return angular.module('myApp.login').controller('logctr',function($scope){
    //      var login=$scope.login={};
    //      login.testHtml='this is login page';
    //  });
     
     return {
          init:function($scope){
               var login=$scope.login={};
               login.testHtml='this is login page';
          }
     };
});
