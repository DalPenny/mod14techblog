// import models
const Blogpost = require('./blogpost');
const Comments = require('./comments');
const User = require('./user');

// User HasMany Blog Post
User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// User HasMany comments
User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  hooks: true
});

// Blogpost belongs to User
Blogpost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// comment belongTo User
Comments.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  hooks: true
 });

 // comment belongTo Blogpost
Comments.belongsTo(Blogpost, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
  hooks: true
 });

  // Blogpost has many comments
Blogpost.hasMany (Comments, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
  hooks: true
 });

module.exports = {
  User,
  Blogpost,
  Comments
};
