document.querySelectorAll(".user-post-container").forEach((item) => {
  item.addEventListener("click", handleEditPost);
});

async function handleEditPost(e) {
  let postID = e.target.closest("[data-post-id]").getAttribute("data-post-id");

  let response = await fetch(`/editpost/${postID}`, {
    method: "get",
  });
  if (response.ok) {
   
  }
}
