const controller = require('../controllers/announcement.controller');

module.exports = (app) => {
    app.post('/announcement', controller.create);
    app.get('/announcement/:id', controller.findById);
    app.put('/announcement/:id', controller.update);
    app.delete('/announcement/:id', controller.delete);
};