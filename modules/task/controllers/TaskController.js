'use strict';
define([
    'angular',
    'modules/task/models/TaskModel'
], function(angular,taskModel) {
     return {
          init:function($scope,$http){
               var task=$scope.task={};
               task.testHtml='this is task page';
               task.taskList=taskModel;
          }
     };
});