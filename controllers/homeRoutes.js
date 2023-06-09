const router = require('express').Router();
const { Sequelize } = require('sequelize');
const { cpu, graphicsCard, memory, User } = require('../models');



router.get('/', async (req, res) => {
    try {
        const cpuData = await cpu.findAll({
            include: [
                {
                  model: User,
                  as: 'user', 
                  attributes: ['email'] 
                }
              ]
            });
        const gpuData = await graphicsCard.findAll({
            include: [
                {
                  model: User,
                  as: 'user', 
                  attributes: ['email'] 
                }
              ]
            });
        const hardDriveData = await memory.findAll({
            include: [
                {
                  model: User,
                  as: 'user', 
                  attributes: ['email'] 
                }
              ]
            });

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

router.post('/search', async (req, res) => {
    console.log('got post',req.body);
    try {
        const cpuSearch = await cpu.findAll({ where: {
            description: {[Sequelize.Op.like]: '%'+req.body.keyword+'%'},
         }});
         const gpuSearch = await graphicsCard.findAll({ where: {
            description: {[Sequelize.Op.like]: '%'+req.body.keyword+'%'},
         }});
         const memorySearch = await memory.findAll({ where: {
            description: {[Sequelize.Op.like]: '%'+req.body.keyword+'%'},
         }});
         const cpus = cpuSearch.map((project) => project.get({ plain:true }));
         const gpus = gpuSearch.map((project) => project.get({ plain:true }));
         const memorys = memorySearch.map((project) => project.get({ plain:true }));
         const items = cpus.concat(gpus, memorys);
         res.render('homepage', {
            items
        });
        console.log(items);
    } catch (err) {
        res.status(400).json(err,);

    }

});

router.get('/mail', async (req, res) => {
    res.render('mail');
  });

module.exports = router;