const express = require('express');
const usersController = require('../controllers/users.controller');

const router = express.Router();

router.route('/login').post((req, res) => {
    usersController.login(req, res);
});

router.route('/register').post((req, res) => {
    usersController.register(req, res);
});

router.route('/current').get((req, res) => {
    usersController.getCurrent(req, res);
});

router.route('/').get((req, res) => {
    usersController.getAll(req, res);
})

router.route('/:id').get((req, res) => {
    usersController.getById(req, res);
});

router.route('/:id').put((req, res) => {
    usersController.update(req, res);
});

router.route('/:id').delete((req, res) => {
    usersController._delete(req, res);
})

module.exports = router;