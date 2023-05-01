const router = require('express').Router();
const { Cpu, GraphicsCard, Memory } = require('../models');

router.get('/', async (req, res) => {
    try {
        const cpuData = await Cpu.findAll();
        const gpuData = await GraphicsCard.findAll();
        const hardDriveData = await Memory.findAll();

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