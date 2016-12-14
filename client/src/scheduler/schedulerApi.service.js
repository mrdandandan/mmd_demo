(function() {
    angular.module('scheduler')
        .service('SchedulerApi', SchedulerApiService);

    SchedulerApiService.$inject = ['$http', 'API_CONFIG'];

    function SchedulerApiService($http, API_CONFIG) {
        ////
        // Fields
        ////
        let BASE_URL = `${API_CONFIG.HOST}:${API_CONFIG.PORT}/api/appointment`;

        ////
        // API
        ////
        this.addAppointment = addAppointment;
        this.cancelAppointment = cancelAppointment;
        this.getTimeSlots = getTimeSlots;
        this.updateAppointment = updateAppointment;

        ////
        // Functions
        ////
        function addAppointment(timeSlotId, {name, phoneNumber}) {
            return $http({
                method: 'POST',
                url: `${BASE_URL}/addAppointment`,
                data: {
                    timeSlotId,
                    appointment: {name, phoneNumber}
                }
            });
        }

        function cancelAppointment(timeSlotId) {
            return $http({
                method: 'POST',
                url: `${BASE_URL}/cancelAppointment`,
                data: {
                    timeSlotId
                }
            });
        }

        function getTimeSlots() {
            return $http({
                method: 'GET',
                url: `${BASE_URL}/getTimeSlots`
            });
        }

        function updateAppointment(timeSlotId, {name, phoneNumber}) {
            return $http({
                method: 'POST',
                url: `${BASE_URL}/updateAppointment`,
                data: {
                    timeSlotId,
                    appointment: {name, phoneNumber}
                }
            });
        }
    }
})();