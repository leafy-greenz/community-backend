const controller = require('../controllers/event.controller');

module.exports = (app) => {
    app.get('/event/:id', controller.findById);
    app.post('/event', controller.create);
    app.put('/event/:id', controller.update);
    app.delete('/event/:id', controller.delete);
    app.put('/event/:id/attendee/:userId', controller.addUserToEvent)
};