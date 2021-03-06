const controller = require('../controllers/community.controller');

module.exports = (app) => {
    app.post('/community', controller.create);
    app.get('/community', controller.findAll);
    app.get('/community/:id', controller.findById);
    app.put('/community/:id', controller.update);
    app.delete('/community/:id', controller.delete);
    app.put('/community/:id/event/:eventId', controller.addEvent);
    app.delete('/community/:id/event/:eventId', controller.removeEvent);
    app.put('/community/:id/announcement/:announceId', controller.addAnnouncement);
    app.delete('/community/:id/announcement/:announceId', controller.removeAnnouncement);
    app.put('/community/:id/question/:questionId', controller.addQuestion);
    app.delete('/community/:id/question/:questionId', controller.removeQuestion);
    app.put('/community/:id/user/:userId', controller.addMember);
};