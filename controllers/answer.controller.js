const Answer = require('../models/answer.model');

module.exports = {
    create: async (req, res) => {
        try {
            res.send(await Answer.create(req.body));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    findById: async (req, res) => {
        try {
            res.send(await Answer.findById(req.params.id));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    update: async (req, res) => {
        try {
            res.send(await Answer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            res.send(await Answer.findByIdAndRemove(req.params.id));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    }
};