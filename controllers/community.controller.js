const Community = require('../models/community.model');
const Event = require('../models/event.model');
const Announcement = require('../models/announcement.model');

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
                    .populate('announcements')
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
                    .populate('announcements')
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
    },
    addEvent: async (req, res) => {
        try {
            const event = await Event.findById(req.params.eventId);
            const community = await Community.findById(req.params.id);

            if (!event) {
                res.status(404).send("Event not found!");
            } else if (!community) {
                res.status(404).send("Community not found!");
            } else {
                res.send(await Community.findByIdAndUpdate(req.params.id,
                    { $push: { events: req.params.eventId }}, { new: true }));
            }
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    removeEvent: async (req, res) => {
        try {
            const event = await Event.findById(req.params.eventId);
            const community = await Community.findById(req.params.id);

            if (!event) {
                res.status(404).send("Event not found!");
            } else if (!community) {
                res.status(404).send("Community not found!");
            } else {
                res.send(await Community.findByIdAndUpdate(req.params.id,
                    { $pull: { events: req.params.eventId } }, { new: true }));
            }
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    addAnnouncement: async (req, res) => {
        try {
            const announcement = await Announcement.findById(req.params.announceId);
            const community = await Community.findById(req.params.id);

            if (!announcement) {
                res.status(404).send("Announcement not found!");
            } else if (!community) {
                res.status(404).send("Community not found!");
            } else {
                res.send(await Community.findByIdAndUpdate(req.params.id,
                    { $push: { announcements: req.params.announceId } }, { new: true }));
            }
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    removeAnnouncement: async (req, res) => {
        try {
            const announcement = await Announcement.findById(req.params.announceId);
            const community = await Community.findById(req.params.id);

            if (!announcement) {
                res.status(404).send("Announcement not found!");
            } else if (!community) {
                res.status(404).send("Community not found!");
            } else {
                res.send(await Community.findByIdAndUpdate(req.params.id,
                    { $pull: { announcements: req.params.announceId } }, { new: true }));
            }
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    addQuestion: async (req, res) => {
        try {
            res.send(await Community.findByIdAndUpdate(req.params.id,
                { $push: { questions: req.params.questionId } }));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    },
    removeQuestion: async (req, res) => {
        try {
            res.send(await Community.findByIdAndUpdate(req.params.id,
                { $pull: { questions: req.params.questionId } }));
        } catch (e) {
            console.error(e);
            res.status(500).send(e);
        }
    }
};