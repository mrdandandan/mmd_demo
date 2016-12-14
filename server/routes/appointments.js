let appointments = require('../business/appointments');

let express = require('express'),
    router = express.Router();

const ENDPOINTS = {
    ADD_APPOINTMENT: 'addAppointment',
    CANCEL_APPOINTMENT: 'cancelAppointment',
    GET_APPOINTMENT: 'getAppointment',
    GET_TIME_SLOTS: 'getTimeSlots',
    UPDATE_APPOINTMENT: 'updateAppointment'
};

router.post(`/${ENDPOINTS.ADD_APPOINTMENT}`, (req, res) => {
    return appointments.addAppointment(req.body.timeSlotId, req.body.appointment)
        .then(response => {
            res.json(response);
        })
        .catch(err => error(err, res));
});

router.post(`/${ENDPOINTS.CANCEL_APPOINTMENT}`, (req, res) => {
    return appointments.cancelAppointment(req.body.timeSlotId)
        .then(response => {
            res.json(response);
        })
        .catch(err => error(err, res));
});

router.get(`/${ENDPOINTS.GET_APPOINTMENT}`, (req, res) => {
    return appointments.getAppointment(req.query.timeSlotId)
        .then(response => {
            res.json(response);
        })
        .catch(err => error(err, res));
});

router.get(`/${ENDPOINTS.GET_TIME_SLOTS}`, (req, res) => {
    return appointments.getTimeSlots()
        .then(response => {
            res.json(response);
        })
        .catch(err => error(err, res));
});

router.post(`/${ENDPOINTS.UPDATE_APPOINTMENT}`, (req, res) => {
    return appointments.updateAppointment(req.body.timeSlotId, req.body.appointment)
        .then(response => {
            res.json(response);
        })
        .catch(err => error(err, res));
});

function error(err, res) {
    res.status(500);
    res.json(err);
}

module.exports = router;