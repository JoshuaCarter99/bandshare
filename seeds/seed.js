const sequelize = require('../config/connection');
const { User, Post, Tag } = require('../models');
const userSeedData = require('./userSeeds.json');
const postSeedData = require('./postSeeds.json');
const tagSeedData = require('./tagSeeds.json');

const seedDB = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });

    await Post.bulkCreate(postSeedData, {});

    await Tag.bulkCreate(tagSeedData, {});

    process.exit(0);
};

seedDB();