const controller = require('../controllers/question.controller');

module.exports = (app) => {
    app.get('/question/:id', controller.findById);
    app.post('/question', controller.create);
    app.delete('/question/:id', controller.delete);
    app.put('/question/:id', controller.update);
    app.put('/question/:id/answer/:answerId', controller.addAnswer);
    app.delete('/question/:id/answer/:answerId', controller.removeAnswer);
};