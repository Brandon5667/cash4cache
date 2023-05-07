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
        const items = cpus.concat(gpus, hardDrives);
        res.render('homepage', {
            items
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

router.post('/', async (req, res) => {
    try {
        const cpuSearch = await cpu.findAll({ where: {
            description: {[Op.like]: req.body.keyword},
         }});
         const searchResults = cpuSearch;
         res.render('homepage', {
            searchResults
        });
    } catch (err) {
        res.status(400).json(err);
    }

});

module.exports = router;