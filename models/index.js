const User = require('./User');
const Tag = require('./Tag');
const Post = require('./Post');


User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsToMany(Tag, {
  through: 'post_tag',
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Tag.belongsToMany(Post, {
  through: "post_tag",
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'
});


  module.exports = { User, Tag, Post };