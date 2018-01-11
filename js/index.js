function accountsLogin() {
  var pw = document.getElementById("password");
  var userName = document.getElementById("username");
  if (pw.value == "434" && userName.value == "username777") {
    location.reload();
  } else {
    alert("Incorrect Username or Password!");
  }
}
