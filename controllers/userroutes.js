const auth = require('../utils/auth');
const router = require('express').Router();
const { User, cpu, memory, graphicsCard } = require('../models');

// Route to grab user's information
router.get('/', auth, async (req, res) => {
  try {
    const cpuData = await cpu.findAll({
      where: {
        id: req.session.user_id
      }
    });
    
    const gpuData = await graphicsCard.findAll({
      where: {
        id: req.session.user_id
      }
    });
    
    const hardDriveData = await memory.findAll({
      where: {
        id: req.session.user_id
      }
    });

    const userData = await User.findOne({
      where: {
        id: req.session.user_id
      },
    });

    const cpus = cpuData.map((project) => project.get({ plain: true }));
    const gpus = gpuData.map((project) => project.get({ plain: true }));
    const hardDrives = hardDriveData.map((project) => project.get({ plain: true }));

    const items = {
      cpuData: cpus,
      gpuData: gpus,
      hardDriveData: hardDrives,
      userData: userData,
    };
    console.log(userData)
    console.log(items)
    res.render('profile', { name: userData.name, email: userData.email, items });
  } catch (err) {
    console.error(err);
    res.redirect('/login');
  }
});

module.exports = router;
