let posts = document.querySelectorAll(".post-container");
posts.forEach((post) => {
  post.addEventListener("click", (e) => {
    let postId = e.target.closest("[data-post-id]").dataset.postId;
    let commentBox = document.createElement("div");
    commentBox.classList.add("comment-container");
    let commentText = document.createElement("p");
    commentText.textContent = "Comment";
    let commentInput = document.createElement("input");
    commentInput.setAttribute("autofocus", true);
    let commentForm = document.createElement("form");
    let commentBtn = document.createElement("button");
    commentBox.append(commentText);
    commentForm.append(commentInput);
    commentForm.append(commentBtn);
    commentBox.append(commentForm);

    post.after(commentBox);

    commentForm.addEventListener("submit", () => {
      e.preventDefault();

      let comment = document.querySelector("input").value.trim();
      console.log(comment);
      commentForm.style.display = "none";
      commentBox.append(comment);
      fetch("/comments", {
        method: "post",
        body: JSON.stringify({
          comment,
          postId,
        }),
        headers: { "Content-type": "application/json" },
      }).then((res) => {
        if (res.ok) {
          document.location.replace("/home");
        }
      });
    });
    //send the comment to the comment db with the current user and the post it was made on
  });
});
