async function handleloginForm(event) {
  console.log("clicked");
  event.preventDefault();

  const userName = document.querySelector("#username").value.trim();
  const passWord = document.querySelector("#password").value.trim();
  console.log(userName, passWord);

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
