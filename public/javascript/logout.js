async function handleLogOut() {
  console.log("clicked");
  const response = await fetch("/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/home");
  }
}

document.querySelector("#logout").addEventListener("click", handleLogOut);
