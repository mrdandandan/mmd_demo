let Appointment = require('./Appointment');

let id = 0;

let privateProps = new WeakMap();
class TimeSlot {
    constructor(start, end) {
        privateProps.set(this, {
            id: ++id,
            end,
            start
        });
    }

    addAppointment({name, phoneNumber}) {
        return privateProps.get(this).appointment = new Appointment(name, phoneNumber);
    }
    cancelAppointment(/* could provide appointmentId in the future */) {
        delete privateProps.get(this).appointment;
        return !privateProps.get(this).appointment;
    }
    hasAppointment() {
        return !!privateProps.get(this).appointment;
    }
    getAppointment() {
        return privateProps.get(this).appointment;
    }
    get() {
        let {start, end, id, appointment} = privateProps.get(this);

        return {
            id,
            start,
            end,
            appointment: appointment ? appointment.get() : undefined
        };
    }
}

module.exports = TimeSlot;