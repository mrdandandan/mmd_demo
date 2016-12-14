let id = 0;

let privateProps = new WeakMap();
class Appointment {
    constructor(name, phoneNumber) {
        privateProps.set(this, {
            id: ++id,
            name,
            phoneNumber
        });
    }

    get() {
        return privateProps.get(this);
    }

    update({name, phoneNumber}) {
        let appointment = privateProps.get(this);
        // validate
        if(name) {
            appointment.name = name;
        }
        // validate
        if(phoneNumber) {
            appointment.phoneNumber = phoneNumber;
        }

        return this.get();
    }
}

module.exports = Appointment;