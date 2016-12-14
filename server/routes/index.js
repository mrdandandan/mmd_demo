let appointments = require('./appointments');

module.exports = function routes(app) {
    app.use('/api/appointments', appointments);
};