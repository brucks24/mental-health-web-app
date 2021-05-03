const express = require('express');
const userRoutes = require('./users.routes');
const panicRoutes = require('./panic.routes');
const sendMessageRoutes = require('./sendMessage.routes');
const chatRoutes = require('./chat.routes');
const coachRoutes = require('./coach.routes')

const router = express.Router();

// mount user routes at /user
router.use('/user', userRoutes);

// mount panic routes at /panic
router.use('/panic', panicRoutes);

// mount send message routes at /sendMessage
router.use('/sendMessage', sendMessageRoutes);

// mount chat routes at /chat
router.use('/chat', chatRoutes)

// mount team routes at /team
router.use('/team', coachRoutes)

module.exports = router;