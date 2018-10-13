const Event = require('../models/event.model');

module.exports = {
    create: async (req, res) => {
        try {
            res.send(await Event.create(req.body));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    findById: async (req, res) => {
        try {
            res.send(await Event.findById(req.params.id).populate('attendees'));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            res.send(await Event.findByIdAndRemove(req.params.id));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    update: async (req, res) => {
        try {
            res.send(await Event.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    addUserToEvent: async (req, res) => {
        try {
            res.send(await Event.findByIdAndUpdate(req.params.id,
                { $push: { attendees: req.params.userId } }, { new: true }));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    }
};