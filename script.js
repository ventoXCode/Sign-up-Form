function validate_password() {
  let password = document.getElementById("password1");
  let conf_password = document.getElementById("password2");
  let invalid = document.getElementById("invalid");
  let forms = document.getElementsByTagName("input");

  if (password.value != conf_password.value) {
    invalid.textContent = "* Passwords do not match";
    password.style.borderColor = "red";
    conf_password.style.borderColor = "red";
    password.value = "";
    conf_password.value = "";
  } else {
    invalid.textContent = "You are now logged in!";
    invalid.style.color = "green";
    password.style.borderColor = "";
    conf_password.style.borderColor = "";
    for (let i = 0; i < forms.length; i++) {
      forms[i].value = "";
    }
  }
}
