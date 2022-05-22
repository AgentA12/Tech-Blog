async function handleSignupForm(event) {
  event.preventDefault();

  const userName = document.querySelector("#username").value.trim();
  const passWord = document.querySelector("#password").value.trim();
  console.log(userName, passWord);

  if (userName && passWord) {
    const response = await fetch("/user/signup", {
      method: "post",
      body: JSON.stringify({
        userName,
        passWord,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", handleSignupForm);
