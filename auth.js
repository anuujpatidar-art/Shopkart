function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "admin" && p === "1234") {
    localStorage.setItem("loggedIn", "true");
    alert("Login Successful");
    window.location.href = "index.html";
  } else {
    alert("Wrong credentials");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login first");
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}