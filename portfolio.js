function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields befoe sending the message");
    return false;
  }
  alert("Message Sent successfully!");
  return true;
}
