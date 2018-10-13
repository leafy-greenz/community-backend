const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/user', controller.create);
    app.delete('/user/:id', controller.delete);
    app.get('/user/:id', controller.findById);
    app.put('/user/:id', controller.update);
};