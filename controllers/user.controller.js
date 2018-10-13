const User = require('../models/user.model');

exports.create = async (req, res) => {
    try {
        res.send(await User.create(req.body));
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
};

exports.findById = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if (user) {
            res.send(user);
        } else {
            res.status(404).send('User not found!');
        }
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
};

exports.update = async (req, res) => {
    try {
        res.send(await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }));
    }  catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
};

exports.delete = async (req, res) => {
    try {
        //TODO: handle deleting community from users too
        res.send(await User.findByIdAndRemove(req.params.id));
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
};