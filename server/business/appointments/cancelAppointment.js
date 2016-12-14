let getTimeSlot = require('./getTimeSlot');

module.exports = function cancelAppointment(timeSlotId) {
    return getTimeSlot(timeSlotId)
        .then(timeSlot => {
            return {
                success: timeSlot.cancelAppointment()
            }
        });
};