async function handleLogOut() {
  const response = await fetch("/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.text);
  }
}

document.querySelectorAll("li").addEventListener("click", handleLogOut());
