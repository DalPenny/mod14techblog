const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');


class Comments extends Model { }

Comments.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // comment_title: {
    //   type: DataTypes.STRING,
    //   allowNull: true,

    // },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    user_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'user',
        key: 'id'
      } 
    },
    blog_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'blogpost',
        key: 'id'
      } 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;
