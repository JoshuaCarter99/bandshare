const User = require('./User');
const Tag = require('./Tag');
const Post = require('./Post');
const PostTag = require('./PostTag');


User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.belongsToMany(Tag, {
  foreignKey: 'post_id',
  through: PostTag
});

Tag.belongsToMany(Post, {
  foreignKey: 'tag_id',
  through: PostTag
});


  module.exports = { User, Tag, Post, PostTag };