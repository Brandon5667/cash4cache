const sequelize = require('../config/connection');
const { cpu, graphicsCard, memory, User } = require('../models');

const userData = require('./userData.json');
const memoryData = require('./memoryData.json');
const cpuData = require('./cpuData');
const graphicscard = require('./graphicscard');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await cpu.bulkCreate(cpuData, {
      individualHooks: true,
      returning: true,
    });
    await graphicsCard.bulkCreate(graphicscard, {
        individualHooks: true,
        returning: true,
    });
    await memory.bulkCreate(memoryData, {
        individualHooks: true,
        returning: true,
      });
    
    
  
    process.exit(0);
};



seedDatabase();