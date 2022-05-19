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
  foreignKey: comment_id,
});

Comment.hasOne(Post, {
  foreignKey: comment_id,
});

module.exports = { User, Post, Comment };
