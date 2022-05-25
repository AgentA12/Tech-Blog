async function handleSignupForm(event) {
  event.preventDefault();

  const userName = document.querySelector("#username").value.trim();
  const passWord = document.querySelector("#password").value.trim();

  if (userName && passWord) {
    const response = await fetch("/signup", {
      method: "post",
      body: JSON.stringify({
        userName,
        passWord,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    }
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", handleSignupForm);
