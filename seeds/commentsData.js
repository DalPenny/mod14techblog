const {Comments} = require('../models');

const commentsData = require('./commentsData.json');
  
const seedcommentsData = () => Comments.bulkCreate(commentsData, {
    // individualHooks: true,
    // returning: true,
  });``

module.exports = seedcommentsData;
