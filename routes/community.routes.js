const controller = require('../controllers/community.controller');

module.exports = (app) => {
    app.post('/community', controller.create);
    app.get('/community', controller.findAll);
    app.get('/community/:id', controller.findById);
    app.put('/community/:id', controller.update);
    app.delete('/community/:id', controller.delete);
    app.put('/community/:id/event/:eventId', controller.addEvent);
    app.delete('/community/:id/event/:eventId', controller.removeEvent);
};