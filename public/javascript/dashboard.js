document.querySelectorAll("#user-post-list").forEach((post) => {
    post.addEventListener("click", handlePostEdit);
  });
  
  async function handlePostEdit(e) {
    e.preventDefault();
    let postId = e.target.getAttribute("data-post-id");
  
    let res = await fetch("/editpost", {
      method: "put",
      body: JSON.stringify({
        postId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  