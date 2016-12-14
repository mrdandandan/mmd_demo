(function () {
    angular.module('scheduler')
        .controller('EditAppointmentController', EditAppointmentController);

    EditAppointmentController.$inject = [
        '$scope',
        '$element',
        'timeSlot',
        'close'
    ];

    function EditAppointmentController($scope, $element, timeSlot, close) {
        ////
        // Setup
        ////
        var ctrl = this;

        initialize();
        ////
        // API
        ////

        ////
        // Scope
        ////
        $scope.save = function saveAppointment() {
            if($scope.editAppointmentForm.$invalid) {
                return;
            }
            $element.modal('hide');
            close({
                isNewAppointment: ctrl.isNewAppointment,
                appointment: ctrl.appointment
            }, 200);
        };
        $scope.cancel = function cancelAppointment() {
            $element.modal('hide');
            close({
                cancelAppointment: true
            }, 200);
        };

        ////
        // Functions
        ////
        function initialize() {
            ctrl.isNewAppointment = !timeSlot.appointment;
            ctrl.appointment = timeSlot.appointment || {
                    name: '',
                    phoneNumber: ''
                };
        }
    }
})();