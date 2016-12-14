let day = require('../../data/appointment/Day');

module.exports = function getTimeSlot(timeSlotId) {
    let timeSlot = day.getTimeSlots().find(timeSlot => timeSlot.get().id === timeSlotId);

    if(!timeSlot) {
        return Promise.reject(`Invalid timeSlotId:${timeSlotId} provided`);
    }

    return Promise.resolve(timeSlot);
};