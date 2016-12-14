let TimeSlot = require('./TimeSlot');

let privateProps = new WeakMap();
class Day {
    // Just assume today
    constructor() {
        let timeSlots = [];

        let now = new Date();
        for(let startTime = 9; startTime < 17; startTime++) {
            let start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startTime),
                end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startTime + 1);
            timeSlots.push(new TimeSlot(
                start,
                end
            ));
        }

        privateProps.set(this, {
            timeSlots
        })
    }

    getTimeSlots() {
        return privateProps.get(this).timeSlots;
    }
}

module.exports = new Day();