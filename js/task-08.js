const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === " " || password.value === " ") {
    return "Будь ласка, заповніть усі поля!";
  }
  const userDetails = { email: email.value, пароль: password.value };

  console.log(userDetails);
  event.currentTarget.reset();
}
