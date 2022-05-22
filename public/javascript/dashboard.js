function renderPostDiv() {
  document.querySelector("#create-post-toggler").style.display = "block";
}

async function handlePostCreate(event) {
  event.preventDefault();

  let postTitle = document.querySelector("#post-title").value.trim();
  let postContent = document.querySelector("#post-content").value.trim();

  let res = await fetch("/dashboard", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
  });

  console.log(res);
}

document.querySelector("#add-post").addEventListener("click", renderPostDiv);

document
  .querySelector("#create-form")
  .addEventListener("submit", handlePostCreate);
