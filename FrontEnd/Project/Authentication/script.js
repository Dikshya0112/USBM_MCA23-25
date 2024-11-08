// // Fetch data from localStorage or set an empty array if no users are found
let users = JSON.parse(localStorage.getItem("users")) || [];
let signup = document.getElementById("signupBtn");
let login = document.getElementById("loginBtn");
let logout = document.getElementById("logoutBtn");

signup.addEventListener("click", Signup);
login.addEventListener("click", Login);
logout.addEventListener("click", logoutfun);

function showView(view) {
  document.getElementById("signUpSec").style.display = view === "signUpSec" ? "block" : "none";
  document.getElementById("loginSec").style.display = view === "loginSec" ? "block" : "none";
  document.getElementById("dashboard").style.display = view === "dashboard" ? "block" : "none";
}

function Signup() {
  let userName = document.getElementById("username").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("password").value;

  const newUser = { name: userName, email: userEmail, password: userPassword };

  // Check if user already exists
  const userExists = users.find((user) => user.email === userEmail);
  if (userExists) {
    alert("User already exists.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Sign-up successful! Please log in.");
  showView("loginSec");
}

function Login() {
  let userEmail = document.getElementById("loginUsername").value;
  let userPassword = document.getElementById("loginPassword").value;

  const storeUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = storeUsers.find(
    (user) => user.email === userEmail && user.password === userPassword
  );

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    alert("Login successful!");
    showDashboard();
  } else {
    alert("Invalid credentials.");
  }
}

function showDashboard() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  document.getElementById("usernameDisplay").innerText = `Hey ${user.name}, welcome!`;
  showView("dashboard");
}

function logoutfun() {
  localStorage.removeItem("loggedUser");
  alert("You've successfully logged out.");
  showView("signUpSec");
}

// Initial view setup to show the signup section
showView("signUpSec");
