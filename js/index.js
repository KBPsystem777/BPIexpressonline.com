function accountsLogin() {
  var pw = document.getElementById("password");
  var userName = document.getElementById("username");
  if (pw.value == "434" && userName.value == "username777") {
    location.href = "../index.html";
    console.log("Login Success!");
  } else {
    alert("Incorrect Username or Password!");
  }
}
