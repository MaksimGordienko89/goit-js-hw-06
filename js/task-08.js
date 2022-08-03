const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    email: { value: emailValue },
    password: { value: passwordlValue },
  } = event.target.elements;

  const messageAlert = "Будь ласка, заповніть усі поля!";

  if (emailValue === "" || passwordlValue === "") {
    alert(messageAlert);
  } else {
    console.log({ emailValue, passwordlValue });
    form.reset();
  }
}
