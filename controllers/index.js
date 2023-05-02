const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');
const uploadRoutes = require('./uploadRoutes.js');
const loginRoutes = require('./loginroutes.js');
const userRoutes = require('./userroutes.js');

router.use('/', homeRoutes);
router.use('/upload', uploadRoutes);
router.use('/login', loginRoutes);
router.use('/profile', userRoutes);


module.exports = router;