document
  .querySelector("#create-form")
  .addEventListener("submit", handleCreatePost);

async function handleCreatePost(e) {
  e.preventDefault();

  const postTitle = document.querySelector("#create-post-title").value.trim();
  const postBody = document.querySelector("#create-post-body").value.trim();

  if (postBody && postTitle) {
    let res = await fetch("/dashboard", {
      method: "post",
      body: JSON.stringify({
        postBody,
        postTitle,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      document.location.replace("/dashboard");
    }
  }
}
