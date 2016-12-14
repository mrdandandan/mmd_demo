let getTimeSlot = require('./getTimeSlot');

module.exports = function addAppointment(timeSlotId, {name, phoneNumber}) {
    if (!name || !phoneNumber) {
        return Promise.reject('Both a name and phone number are required to add an appointment');
    }

    return getTimeSlot(timeSlotId)
        .then(timeSlot => {
            if(timeSlot.hasAppointment()) {
                return Promise.reject(`Appointment already exists at timeslot:${timeSlotId}`);
            }
            return timeSlot.addAppointment({name, phoneNumber}).get();
        });
};