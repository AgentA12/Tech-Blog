function renderPostDiv() {
  document.querySelector("#create-post-toggler").style.display = "block";
  document.querySelector("#dashboard-post-ul").style.display = "none";
}

async function handlePostCreate(event) {
  event.preventDefault();
  console.log(document.querySelector("#create-post-title").value);
  let postTitle = document.querySelector("#create-post-title").value.trim();
  let postContent = document.querySelector("#create-post-body").value.trim();

  let response = await fetch("/post", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
  });
  if (response) {
    document.querySelector("#create-post-toggler").style.display = "none";
    document.location.replace("/dashboard");
  }
}

document.querySelector("#add-post").addEventListener("click", renderPostDiv);

document
  .querySelector("#create-form")
  .addEventListener("submit", handlePostCreate);
