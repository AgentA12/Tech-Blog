async function handleloginForm(event) {
  event.preventDefault();

  const userName = document.querySelector("#username").value.trim();
  const passWord = document.querySelector("#password").value.trim();

  if (userName && passWord) {
    const response = await fetch("/login", {
      method: "post",
      body: JSON.stringify({
        userName,
        passWord,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
      console.log(response);
    } else {
      console.log(response);
    }
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", handleloginForm);
