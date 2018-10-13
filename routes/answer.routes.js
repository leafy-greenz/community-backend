const controller = require('../controllers/answer.controller');

module.exports = (app) => {
    app.get('/answer/:id', controller.findById);
    app.post('/answer', controller.create);
    app.put('/answer/:id', controller.update);
    app.delete('/answer/:id', controller.delete);
};