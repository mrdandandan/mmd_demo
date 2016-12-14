(function () {
    angular.module('scheduler')
        .service('schedulerApi', schedulerApiService);

    schedulerApiService.$inject = ['$http', 'API_CONFIG'];

    function schedulerApiService($http, API_CONFIG) {
        ////
        // Fields
        ////
        let BASE_URL = `${API_CONFIG.HOST}:${API_CONFIG.PORT}/api/appointments`;

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
            }).then(response => {
                return response.data;
            });
        }

        function cancelAppointment(timeSlotId) {
            return $http({
                method: 'POST',
                url: `${BASE_URL}/cancelAppointment`,
                data: {
                    timeSlotId
                }
            }).then(response => {
                return response.data;
            });
        }

        function getTimeSlots() {
            return $http({
                method: 'GET',
                url: `${BASE_URL}/getTimeSlots`
            })
                .then(response => response.data.map(timeSlot => {
                    timeSlot.start = new Date(timeSlot.start);
                    timeSlot.end = new Date(timeSlot.end);

                    return timeSlot;
                }));
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