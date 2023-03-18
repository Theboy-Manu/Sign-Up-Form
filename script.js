const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

function checkPasswords() {
  if (password.value !== password2.value) {
    password.classList.add("error");
    password2.classList.add("error");
  } else {
    password.classList.remove("error");
    password2.classList.remove("error");
  }
}

password.addEventListener("input", checkPasswords);
password2.addEventListener("input", checkPasswords);
