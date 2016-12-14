(function () {
    angular.module('scheduler')
        .controller('SchedulerController', SchedulerController);

    SchedulerController.$inject = [
        '$scope',
        'schedulerApi',
        'ModalService'
    ];

    function SchedulerController($scope, schedulerApi, ModalService) {
        ////
        // Setup
        ////
        var ctrl = this;
        ctrl.timeSlots = [];

        initialize();
        ////
        // API
        ////

        ////
        // Scope
        ////
        $scope.timeSlotClicked = timeSlotClicked;

        ////
        // Functions
        ////
        function initialize() {
            schedulerApi.getTimeSlots()
                .then(response => {
                    ctrl.timeSlots = response;
                });
        }

        function timeSlotClicked(timeSlot) {
            ModalService.showModal({
                templateUrl: 'src/scheduler/scheduler.editAppointment.tpl.html',
                controller: 'EditAppointmentController',
                controllerAs: 'model',
                inputs: {
                    timeSlot
                }
            })
                .then(modal => {
                    modal.element.modal();
                    modal.close.then(result => {
                        if(result.cancelAppointment) {
                            schedulerApi.cancelAppointment(timeSlot.id)
                                .then(result => {
                                    if(result.success) {
                                        timeSlot.appointment = undefined;
                                    } else {
                                        console.log('...something went wrong');
                                    }
                                })
                        } else if (result.isNewAppointment) {
                            schedulerApi.addAppointment(timeSlot.id, result.appointment)
                                .then(appointment => {
                                    timeSlot.appointment = appointment;
                                });
                        } else {
                            schedulerApi.updateAppointment(timeSlot.id, result.appointment);
                        }
                    });
                })
        }
    }
})();