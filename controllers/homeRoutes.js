const router = require('express').Router();
const { cpu, graphicsCard, memory } = require('../models');

router.get('/', async (req, res) => {
    try {
        const cpuData = await cpu.findAll();
        const gpuData = await graphicsCard.findAll();
        const hardDriveData = await memory.findAll();

        const cpus = cpuData.map((project) => project.get({ plain:true }));
        const gpus = gpuData.map((project) => project.get({ plain: true }));
        const hardDrives = hardDriveData.map((project) => project.get({ plain: true }));

        res.render('homepage', {
            cpus, gpus, hardDrives
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

module.exports = router;