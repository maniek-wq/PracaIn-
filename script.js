let preview = document.querySelectorAll("#tile");
let heartIcon = document.querySelectorAll(".fa-heart");
let crl = document.getElementsByClassName("carouselItems");


let offcanvas = document.getElementById("offcanvasTop");
console.log("Klasy offcanvasa "+ offcanvas.classList);

document.addEventListener("DOMContentLoaded", function () {
  const likedTiles = JSON.parse(localStorage.getItem('likedTiles')) || [];

  const heartIcon = document.querySelectorAll(".fa-heart");

  heartIcon.forEach(function (icon) {
    icon.addEventListener("click", function () {
        
       
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
        

        icon.addEventListener("animationend", function () {
          icon.classList.remove("beat-animation");
        });

        
        addToLiked(icon);
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

        
        removeFromLiked(icon);
      }
    });
  });

  function addToLiked(icon) {
    if (!likedTiles.includes(icon)) {
      likedTiles.push(icon);
      localStorage.setItem('likedTiles', JSON.stringify(likedTiles));
    }
    console.log(likedTiles);
  }

  function removeFromLiked(icon) {
    const index = likedTiles.indexOf(icon);
    if (index !== -1) {
      likedTiles.splice(index, 1);
      localStorage.setItem('likedTiles', JSON.stringify(likedTiles));
    }
    console.log(likedTiles);
  }

  
  addToLiked(document.querySelector(".fa-heart"));
});




 
let dot = document.querySelector(".fa-ellipsis");
let hiddenSections = document.getElementsByClassName("hidden");
let isShown = false;
let eye = document.querySelector(".fa-eye-slash");
const a = document.getElementById("anim");

dot.addEventListener("click", function() {
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

eye.addEventListener("click",function(){    
  eye.classList.add("d-none");
  
  for (let i = 0; i < hiddenSections.length; i++) {
    hiddenSections[i].classList.add("unactive");  
    hiddenSections[i].classList.add("d-none"); 
    hiddenSections[i].classList.remove("active"); 
  }
  dot.classList.remove("d-none");
  isShown=false; 

});



