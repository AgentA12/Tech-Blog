const sequelize = require("../config/connection");
const Comment = require("../models/comment");

const commentData = [
  {
    comment_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet neque nec ligula cursus egestas id dignissim libero. Suspendisse tincidunt urna et blandit vestibulum. Donec tincidunt lobortis risus vel pellentesque.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_body:
      "Nullam vitae nunc semper, placerat ante nec, finibus velit. Nam eget tortor quis sem interdum feugiat sed vel tellus. Morbi semper nibh vitae urna auctor egestas. Mauris vitae nibh ac libero tincidunt imperdiet sit amet quis erat. ",
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
