function renderPostDiv() {
  document.querySelector("#create-post-toggler").style.display = "block";
  document.querySelector("#dashboard-post-ul").style.display = "none";
}

async function handlePostCreate(event) {
  event.preventDefault();

  let postTitle = document.querySelector("#post-title").value.trim();
  let postContent = document.querySelector("#post-content").value.trim();

  let response = await fetch("/dashboard", {
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
