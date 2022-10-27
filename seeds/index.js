const seedUserData = require('./userData');
const seedblogpostData = require('./blogpostData');
const seedcommentsData = require('./commentsData');


const sequelize = require('../config/connection');
const { User, Blogpost, Comments } = require('../models');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUserData();
  console.log('\n----- USERS SEEDED -----\n');
//   await User.create(    {
//     // "username": "test",
//     // "first_name": "test",
//     // "last_name": "test",
//     // "email": "test@test.com",
//     // "password": "test123456"
// }
// )

await seedblogpostData();
  console.log('\n----- BLOGPOST SEEDED -----\n');

await seedcommentsData();
  console.log('\n----- COMMENTS SEEDED -----\n');


  process.exit(0);
};

seedAll();