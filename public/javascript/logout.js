async function handleLogOut() {
  const response = await fetch("/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  }
}

document.querySelector("#logout").addEventListener("click", handleLogOut);
