const Tag = require('../models/tag.model');

module.exports = {
    findAll: async (req, res) => {
        try {
            res.send(await Tag.find())
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    findById: async (req, res) => {
        try {
            const tag = await Tag.findById(req.params.id);

            if (tag) {
                res.send(tag);
            } else {
                res.status(404).send("Tag not found!");
            }
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    update: async (req, res) => {
        try {
            res.send(await Tag.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    create: async (req, res) => {
        try {
            res.send(await Tag.create(req.body));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            res.send(await Tag.findByIdAndRemove(req.params.id));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    }
};