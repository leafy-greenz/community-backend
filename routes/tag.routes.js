const controller = require('../controllers/tag.controller');

module.exports = (app) => {
    app.post('/tag', controller.create);
    app.get('/tag', controller.findAll);
    app.get('/tag/:id', controller.findById);
    app.put('/tag/:id', controller.update);
    app.delete('/tag/:id', controller.delete)
};