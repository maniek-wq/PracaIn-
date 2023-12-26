let sendButton = document.getElementById("sendButton");
let delay = 1500;

function createSpinner(appendElement) {
  let spinner = document.createElement("span");
  spinner.classList.add("spinner-border");
  spinner.classList.add("spinner-border-sm");
  spinner.setAttribute("aria-hidden", "true");
  spinner.setAttribute("id", "spinner");
  appendElement.appendChild(spinner);
}

function SendMail() {
  let emailValue = document.getElementById("email_id").value;
  let messageValue = document.getElementById("message").value;
  let surnameValue = document.getElementById("surname").value;
  let nameValue = document.getElementById("name").value;
  let currentDate = new Date();

  if (!emailValue) {
    console.log("Wprowadź adres e-mail ");
    return;
  }

  let params = {
    email_id: emailValue,
    message: messageValue,
    name: nameValue,
    surname: surnameValue,
    date: currentDate,
  };

  emailjs
    .send("service_ul8bste", "template_ieo3qkf", params)
    .then(function (res) {
      console.log("Success! " + res.status);
    });
}

let lowDelay = 1000;

sendButton.addEventListener("click", function () {
  SendMail();

  sendButton.textContent = "";
  createSpinner(sendButton);

  // Po opóźnieniu przywróć klasę "d-none" dla elementu spinnera i tekstu ładowania
  setTimeout(function () {
    createSpinner(sendButton);

    sendButton.textContent = "Sukces!";
    setTimeout(function () {
      sendButton.textContent = "Wyślij!";
    }, lowDelay);
  }, delay);
});
