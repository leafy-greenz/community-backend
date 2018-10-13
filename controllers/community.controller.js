const Community = require('../models/community.model');

module.exports = {
    create: async (req, res) => {
        try {
            res.send(await Community.create(req.body));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    findById: async (req, res) => {
        try {
            res.send(
                await Community.findById(req.params.id)
                    .populate('tags')
                    .populate('members')
                    .populate('events')
                    .populate('questions')
            );
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    findAll: async (req, res) => {
        try {
            res.send(
                await Community.find()
                    .populate('tags')
                    .populate('members')
                    .populate('events')
                    .populate('questions')
            );
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    update: async (req, res) => {
        try {
            res.send(await Community.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            res.send(await Community.findByIdAndRemove(req.params.id));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    }
};