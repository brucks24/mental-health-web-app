const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const User = db.User;

function login(req, res) {
    let userParam = req.body;

    User.findOne({ email: userParam.email }).then(user => {
        if (user && bcrypt.compareSync(userParam.password, user.hash)) {
            const { hash, ...userWithoutHash } = user.toObject();
            const token = jwt.sign({ sub: user.id }, config.secret);
            return res.json({...userWithoutHash, token });
        } else {
            return res.status(400).json({ message: 'Username or password are incorrect' });
        }
    }).catch(err => {
        return res.status(500).json({ error: err.message });
    });
}

function register(req, res) {
    const userParam = req.body;
    console.log(`Register request started...`);
    User.findOne({ email: userParam.email }).then(user => {
        if (user) {
            return res.status(400).json({ message: `The email ${userParam.email} is already in use` });
        }
    }).then(() => {
        const user = new User(userParam);

        // Hash password
        if (userParam.password) {
            user.hash = bcrypt.hashSync(userParam.password, 10);
        } else {
            return res.json({ message: 'Password is required' });
        }

        return user.save();
    }).then(user => {
        console.log(`Created user ${user.email}`);
        return res.json({});
    }).catch(err => {
        return res.status(500).json({ error: err.message });
    })
}

function getAll(req, res) {
    User.find().select('-hash').then(users => {
        return res.json(users);
    }).catch(err => {
        return res.status(500).json({ message: err.message });
    });
}

function getCurrent(req, res) {
    User.findById(req.user.sub).select('-hash').then(user => {
        return res.json(user);
    }).catch(err => {
        return res.status(404).json({ message: err.messa });
    });
}

function getById(req, res) {
    User.findById(req.params.id).select('-hash').then(user => {
        if (user) {
            return res.json(user);
        } else {
            return res.status(404);
        }
    }).catch(err => {
        return res.json({ error: err.message });
    });
}

function update(req, res) {
    const userParam = req.body;

    User.findById(req.params.id).then(user => {
        // validation
        if (!user) return res.json({ message: 'User not found' });
        // TODO: check for handle uniqueness here

        if (userParam.password) {
            userParam.hash = bcrypt.hashSync(userParam.password, 10);
        }

        // Copy userParam properties to user
        Object.assign(user, userParam);

        return user.save();
    }).then(() => {
        return res.json({});
    }).catch(err => {
        return res.status(500).json({ error: err.message });
    });
}

function _delete(req, res) {
    User.findByIdAndRemove(req.params.id).then(() => {
        console.log(`Deleted user ${req.params.id}`);
        return res.json({});
    }).catch(err => {
        return res.json({ message: err.message });
    });
}

module.exports = {
    login,
    register,
    getAll,
    getCurrent,
    getById,
    getById,
    update,
    _delete
};