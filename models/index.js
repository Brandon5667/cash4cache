const graphicsCard = require('./graphicscard');

const memory = require('./memory');

const cpu = require('./cpu');

const User = require('./user');

graphicsCard.belongsTo(User,{
    foreignKey: 'user_id',
    as: "user"
});

User.hasMany(graphicsCard,{
    foreignKey: 'user_id'
});

cpu.belongsTo(User,{
    foreignKey: 'user_id',
    as: "user"
});

User.hasMany(cpu,{
    foreignKey: 'user_id'
});

memory.belongsTo(User,{
    foreignKey: 'user_id',
    as: "user"
});

User.hasMany(memory,{
    foreignKey: 'user_id'
});

module.exports = { 
    graphicsCard, 
    memory,
    cpu,
    User
};
