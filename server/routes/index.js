const express = require('express');
const userRoutes = require('./users.routes');
const panicRoutes = require('./panic.routes');
const chatRoutes = require('./chat.routes');

const router = express.Router();

// mount user routes at /user
router.use('/user', userRoutes);

// mount panic routes at /panic
router.use('/panic', panicRoutes);

// mount chat routes at /chat
router.use('/chat', chatRoutes)

module.exports = router;