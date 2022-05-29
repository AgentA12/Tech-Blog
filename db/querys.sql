select
    user.username,
    post.post_title,
    comment.comment_body
from
    user
    left join post on post.user_id = user.id
    left join comment on comment.post_id = post.id;