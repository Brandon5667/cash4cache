const router = require('express').Router();
const { cpu, graphicsCard, memory } = require('../models');
const CPU = require('../models/cpu');
const withAuth = require('../utils/auth');

router.get('/cpu', async (req, res) => {
    try {

        res.render('uploadCPU');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.get('/memory', async (req, res) => {
    try {

        res.render('uploadMemory');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.get('/graphics', async (req, res) => {
    try {

        res.render('uploadGraphicsCard');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.post('/memory', async (req, res) => {
    console.log("Hit 1")
    try {
        const { name, description, MSRP, ourPrice, storage } = req.body;
        console.log("Hit 2")
        console.log(ourPrice);
        const user = await memory.create({
            name,
            description,
            MSRP,
            ourPrice,
            storage
        })
        console.log(ourPrice);
        res.json({ user: user, message: 'Upload successful!' });

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
        res.json({ user: user, message: 'Upload successful!' });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.post('/cpu', async (req, res) => {
    try {
        const { name, description, brand, MSRP, ourPrice, cores, threads } = req.body;
        const user = await CPU.create({
            name,
            description,
            brand,
            MSRP,
            ourPrice,
            cores,
            threads
        });
        res.json({ user: user, message: 'Upload successful!' });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

module.exports = router;