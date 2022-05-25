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
    } else {
      console.log(response);
      let errorNoUsers = document.createElement("p");
      errorNoUsers.textContent = `Error your password or username are incorrect`;
      errorNoUsers.style.color = "red";
      errorNoUsers.style.marginBottom = "10px";
      errorNoUsers.style.borderTop = "solid 1px red";
      document.querySelector("#password").after(errorNoUsers);
      setTimeout(() => {
        errorNoUsers.remove();
      }, 2000);
    }
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", handleloginForm);
