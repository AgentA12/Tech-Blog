const User = require("./user");
const Post = require("./post");
const Comment = require("./comments");

User.hasMany(Post, {
  foreignKey: user_id,
});

Post.hasOne(User, {
  foreignKey: user_id,
});

Post.hasMany(Comment, {
  foreignKey: post_id,
});

Comment.hasOne(Post, {
  foreignKey: post_id,
});

User.hasMany(Comment, {
  foreignKey: user_id,
});

Comment.hasOne(User, {
  foreignKey: user_id,
});

module.exports = { User, Post, Comment };
