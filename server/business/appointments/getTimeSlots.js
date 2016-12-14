let day = require('../../data/appointment/Day');

module.exports = function getTimeSlots() {
    return Promise.resolve(
        day.getTimeSlots()
            .map(timeSlot => timeSlot.get())
    );
};