const router = require('express').Router();
const { Cpu, GraphicsCard, Memory } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

        res.render('uploadPage');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.post('/', async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});


module.exports = router;