const Announcement = require('../models/announcement.model');

module.exports = {
    create: async (req, res) => {
        try {
            res.send(await Announcement.create(req.body));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    findById: async (req, res) => {
        try {
            res.send(await Announcement.findById(req.params.id));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    update: async (req, res) => {
        try {
            res.send(await Announcement.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            res.send(await Announcement.findByIdAndRemove(req.params.id));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    }
};