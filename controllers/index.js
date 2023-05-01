const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');
const uploadRoutes = require('./uploadRoutes.js');
const loginRoutes = require('./loginRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/', homeRoutes);
router.use('/upload', uploadRoutes);
router.use('/login', loginRoutes);
router.use('/profile', userRoutes);


module.exports = router;