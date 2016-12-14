(function() {
    angular.module('scheduler')
        .directive('scheduler', shedulerDirective);

    shedulerDirective.$inject = [];

    function shedulerDirective() {
        var _ddo = {
            restrict: 'E',
            controller: 'SchedulerController',
            bindToController: true,
            controllerAs: 'model',
            scope: {},
            templateUrl: 'src/scheduler/scheduler.directive.tpl.html'
        };

        _ddo.link = function(scope, element, attrs, ctrl) {

        };

        return _ddo;
    }
})();