document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (name === "gholi" && password === "12345") {
      Swal.fire({
        icon: "success",
        title: "Correct Password",
        text: "Welcome, Gholi!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "It's wrong!",
        text: "Please try again.",
      });
    }
  });
