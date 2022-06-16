let posts = document.querySelectorAll(".post-container");

posts.forEach((post) => {
  post.addEventListener("click", (e) => {
    console.log(post);
    let currentDiv = e.target.closest(".post-container");

    if (document.querySelector("#add-comment")) return;
    let postId = e.target.closest("[data-post-id]").dataset.postId;
    let commentBox = document.createElement("div");
    commentBox.setAttribute("id", "add-comment");
    commentBox.classList.add("comment-container");
    let commentText = document.createElement("p");
    commentText.textContent = "Comment";
    let commentInput = document.createElement("input");
    commentInput.setAttribute("autofocus", true);
    let commentForm = document.createElement("form");
    let commentBtn = document.createElement("button");
    commentBtn.textContent = "Submit comment";
    commentBox.append(commentText);
    commentForm.append(commentInput);
    commentForm.append(commentBtn);
    commentBox.append(commentForm);

    post.after(commentBox);
    //save comment data
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e.target);
      let comment = document.querySelector("input").value.trim();

      if (comment) {
        commentForm.style.display = "none";

        fetch("/comments", {
          method: "post",
          body: JSON.stringify({
            comment,
            postId,
          }),
          headers: { "Content-type": "application/json" },
        }).then((res) => {
          if (res.ok) {
            console.log(res);
            document.location.replace("/");
          }
        });
      }
    });
  });
});
