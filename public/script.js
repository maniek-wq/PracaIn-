let preview = document.querySelectorAll("#tile");
let heartIcon = document.querySelectorAll(".fa-heart");
let crl = document.getElementsByClassName("carouselItems");
let iterator = 0;
let bookmark = document.querySelector(".fa-bookmark");
let offcanvas = document.getElementById("offcanvasTop");

let likedIteration = document.getElementById("iter");

let dot = document.querySelector(".fa-ellipsis");
let hiddenSections = document.getElementsByClassName("hidden");
let isShown = false;
let eye = document.querySelector(".fa-eye-slash");
const a = document.getElementById("anim");
let i = 0;

document.addEventListener("DOMContentLoaded", function () {
  const likedTiles = JSON.parse(localStorage.getItem("likedTiles")) || [];

  const heartIcon = document.querySelectorAll(".fa-heart");

  heartIcon.forEach(function (icon) {
    icon.addEventListener("click", function () {
      const parentTile = findParentTile(icon);

      if (icon.classList.contains("unactive")) {
        icon.classList.add("beat-animation");
        icon.classList.remove("fa-regular");
        icon.classList.remove("fa-heart");
        icon.classList.add("fa-sharp");
        icon.classList.add("fa-solid");
        icon.classList.add("fa-heart");
        icon.classList.remove("unactive");
        icon.classList.add("active");
        icon.style.color = "#e92907";

        //sprawdzic czy rodzic posiada element z aktywnym sercem

        icon.addEventListener("animationend", function () {
          icon.classList.remove("beat-animation");
        });

        i++;
        likedIteration.textContent = i;
        addToLiked(icon);
        if (parentTile) {
          parentTile.classList.add("active");
        }
        console.log(
          "ID ikony po dodaniu do polubionych:",
          icon.getAttribute("data-unique-id")
        );
      } else if (icon.classList.contains("active")) {
        icon.classList.add("unactive");
        icon.classList.remove("fa-sharp");
        icon.classList.remove("fa-solid");
        icon.classList.remove("fa-heart");
        icon.classList.add("fa-regular");
        icon.classList.add("fa-heart");
        icon.classList.remove("active");
        icon.style.color = "rgb(30 48 80)";
        icon.classList.add("shake-animation");

        icon.addEventListener("animationend", function () {
          icon.classList.remove("shake-animation");
        });

        i--;
        likedIteration.textContent = i;
        removeFromLiked(icon);
        console.log(
          "ID ikony po usunięciu z polubionych:",
          icon.getAttribute("data-unique-id")
        );

        if (parentTile) {
          parentTile.classList.remove("active");
        }
      }
    });
  });

  function addToLiked(icon) {
    if (!likedTiles.includes(icon.getAttribute("data-unique-id"))) {
      likedTiles.push(icon.getAttribute("data-unique-id"));
    }
    if (!icon.getAttribute("data-unique-id")) {
      iterator++;
      const uniqueId = "id_" + iterator;
      icon.setAttribute("data-unique-id", uniqueId);
    }

    localStorage.setItem("likedTiles", JSON.stringify(likedTiles));
  }

  function removeFromLiked(icon) {
    const index = likedTiles.indexOf(icon.getAttribute("data-unique-id"));
    if (index !== -1) {
      likedTiles.splice(index, 1);
      localStorage.setItem("likedTiles", JSON.stringify(likedTiles));
    }
  }

  addToLiked(document.querySelector(".fa-heart"));

  function findParentTile(element) {
    let currentElement = element.parentElement;
    while (currentElement) {
      if (currentElement.classList.contains("firstPlace")) {
        return currentElement;
      }
      console.log(currentElement);
      currentElement = currentElement.parentElement;
    }
    return null;
  }
});

bookmark.addEventListener("click", function () {
  const rmCar = document.querySelector(".carouselItems");
  rmCar.remove();
  const rmDots = document.getElementById("more");
  rmDots.remove();
  const rmWar = document.querySelector(".alert");
  rmWar.remove();

  let likedScreen = document.createElement("div");
  likedScreen.setAttribute("class", "likedScreen");
  document.body.appendChild(likedScreen);
  const myHeader = document.createElement("h4");
  likedScreen.appendChild(myHeader);
  myHeader.textContent = "Polubione miejsca";
  myHeader.classList.add("myHeader", "mt-4");

  preview.forEach(function (showTileActive) {
    if (showTileActive.classList.contains("active")) {
      likedScreen.appendChild(showTileActive);
      showTileActive.style.display = "flex";
    }
    if (!showTileActive.classList.contains("active")) {
      showTileActive.remove();
    }
  });
  bookmark.remove();
});

dot.addEventListener("click", function () {
  if (!isShown) {
    console.log("klik!");
    for (let i = 0; i < hiddenSections.length; i++) {
      hiddenSections[i].classList.remove("d-none");
    }
    isShown = true;
    dot.classList.add("d-none");
    eye.classList.remove("d-none");
    if (isShown) {
      for (let i = 0; i < hiddenSections.length; i++) {
        hiddenSections[i].classList.add("active");
      }
    }
  }
});

eye.addEventListener("click", function () {
  eye.classList.add("d-none");

  for (let i = 0; i < hiddenSections.length; i++) {
    hiddenSections[i].classList.add("unactive");
    hiddenSections[i].classList.add("d-none");
    hiddenSections[i].classList.remove("active");
  }
  dot.classList.remove("d-none");
  isShown = false;
});

let sendButton = document.querySelectorAll("#sendButton");
let delay = 1500;

function createSpinner(appendElement) {
  let spinner = document.createElement("span");
  spinner.classList.add("spinner-border");
  spinner.classList.add("spinner-border-sm");
  spinner.setAttribute("aria-hidden", "true");
  spinner.setAttribute("id", "spinner");
  appendElement.appendChild(spinner);
}
let emailValue = document.getElementById("email_id").value;
let messageValue = document.getElementById("message").value;
let dateValue = document.getElementById("date").value;
let fromTimeValue = document.getElementById("startTime").value;
let toTimeValue = document.getElementById("endTime").value;

function SendMail(placeName) {
  if (!emailValue || !dateValue) {
    console.log("Wprowadź adres e-mail i wiadomość przed wysłaniem.");

    return;
  }

  let params = {
    email_id: emailValue,
    message: messageValue,
    date: dateValue,
    place: placeName,
    since: fromTimeValue,
    to: toTimeValue,
  };

  emailjs
    .send("service_ul8bste", "template_3w483ke", params)
    .then(function (res) {
      console.log("Success! " + res.status);
    });
}

let lowDelay = 1000;
sendButton.forEach(function (e) {
  e.addEventListener("click", function () {
    console.log("klik");
    let placeName = e.getAttribute("data-place-name");

    SendMail(placeName);
    console.log("Email:" + emailValue);

    e.textContent = "";
    createSpinner(e);

    // Po opóźnieniu przywróć klasę "d-none" dla elementu spinnera i tekstu ładowania
    setTimeout(function () {
      createSpinner(e);

      e.textContent = "Sukces!";
      setTimeout(function () {
        e.textContent = "Wyślij!";
      }, lowDelay);
    }, delay);
  });
});
