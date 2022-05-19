const sequelize = require("../config/connection");
const Comment = require("../models/comments");

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
  {
    comment_body:
      "Etiam luctus semper sagittis. In accumsan et metus in sagittis. Aenean aliquet risus id justo accumsan, vel vehicula erat lobortis. Mauris et elit leo. In ac aliquam orci, sed maximus mauris.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_body:
      "Duis ac condimentum turpis. Vivamus bibendum ipsum arcu, eu condimentum nisl ornare at. Praesent dapibus purus eu enim tincidunt auctor. Cras a justo quam.",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_body:
      "Praesent fringilla neque auctor nisl feugiat efficitur. Ut dignissim sit amet ligula sodales ornare. Donec maximus, enim at gravida hendrerit, ex neque facilisis felis, vitae suscipit ex purus ac ipsum. Sed porta, erat sit amet tristique interdum, libero metus ornare mi, sed ullamcorper ligula diam nec nibh.",
    user_id: 5,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
