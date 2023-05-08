const router = require('express').Router();
const { cpu, graphicsCard, memory } = require('../models');
const CPU = require('../models/cpu');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

        res.render('uploadPage');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.post('/memory', async (req, res) => {
    try {
        const { name, description, msrp, price, storage } = req.body;
        const user = await memory.create({
            name,
            description,
            msrp,
            price,
            storage
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.post('/graphics', async (req, res) => {
    try {
        const { name, description, msrp, price, storage } = req.body;
        const user = await graphicsCard.create({
            name,
            description,
            msrp,
            price,
            speed
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.post('/cpu', async (req, res) => {
    try {
        const { name, description, brand, price, cores, threads } = req.body;
        const user = await CPU.create({
            name,
            description,
            brand,
            price,
            cores,
            threads
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

module.exports = router;