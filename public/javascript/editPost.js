document
  .querySelector("#delete-btn")
  .addEventListener("click", handleDeletePost);
document.querySelector("#update-btn").addEventListener("click", handleEditPost);

async function handleEditPost(e) {
  e.preventDefault();

  const editedPostTitle = document
    .querySelector("#edit-post-title")
    .value.trim();
  const editedPostBody = document.querySelector("#edit-post-body").value.trim();
  const postId = document.querySelector("[data-post-id]").dataset.postId;
  const response = await fetch("/dashboard/edit", {
    method: "put",
    body: JSON.stringify({
      postId,
      editedPostBody,
      editedPostTitle,
    }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    alert("Post edited");
  } else alert("error unable to edit post");
}

async function handleDeletePost(e) {
  e.preventDefault();

  let postId = document.querySelector("[data-post-id]").dataset.postId;

  const response = await fetch("/dashboard/delete", {
    method: "delete",
    body: JSON.stringify({
      postId,
    }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    alert("Post deleted");
  } else alert("error unable to delete post");
}
