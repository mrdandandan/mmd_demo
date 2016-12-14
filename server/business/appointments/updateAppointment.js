let getTimeSlot = require('./getTimeSlot');

module.exports = function updateAppointment(timeSlotId, {name, phoneNumber}) {
    return getTimeSlot(timeSlotId)
        .then(timeSlot => {
            let appointmet = timeSlot.getAppointment();
            if(!appointmet) {
                return Promise.reject(`Appoint does not exist for timeSlot:${timeSlotId}`);
            }
            return appointmet.update({name, phoneNumber});
        })
};