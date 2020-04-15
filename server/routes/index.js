const express = require('express');
const userRoutes = require('./users.routes');
const panicRoutes = require('./panic.routes');

const router = express.Router();

// mount user routes at /user
router.use('/user', userRoutes);

// mount panic routes at /panic
router.use('/panic', panicRoutes);

module.exports = router;