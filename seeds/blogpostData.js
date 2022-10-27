const { Blogpost } = require('../models');

const blogpostData = require('./blogpostData.json');
  
const seedBlogpostData = () => Blogpost.bulkCreate(blogpostData, {
    // individualHooks: true,
    // returning: true,
  });

module.exports = seedBlogpostData;
