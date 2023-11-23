let preview = document.querySelectorAll("#tile");
let heartIcon = document.querySelectorAll(".fa-heart");
let crl = document.getElementsByClassName("carouselItems");


let offcanvas = document.getElementById("offcanvasTop");


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

let off = document.querySelectorAll(".myTile");

let myBody = document.getElementById("myBody");
off.forEach(function(tiles){

    tiles.dataset.bsToggle="offcanvas";
    tiles.dataset.bsTarget="#offcanvasWithBothOptions";
    tiles.setAttribute("aria-controls","offcanvasWithBothOptions");
    tiles.addEventListener("click",function(){
        console.log("click!");
          
         const newOffcanvas = document.createElement("div");
         myBody.appendChild(newOffcanvas);  

         newOffcanvas.classList.add("offcanvas", "offcanvas-start");
         newOffcanvas.dataset.bsBackdrop="static";
         newOffcanvas.tabIndex = -1;
         newOffcanvas.setAttribute("id","staticBackdrop");
         newOffcanvas.setAttribute('aria-controls', 'staticBackdropLabel');

         const offHeader = document.createElement("div");
         newOffcanvas.appendChild(offHeader);

         offHeader.classList.add("offcanvas-header");

         const header = document.createElement("h5");
         offHeader.appendChild(header);

         header.classList.add("offcanvas-title");
         header.setAttribute("id","staticBackdropLabel");
         header.textContent="Offcanvas";

         const closeOffcanvasButton = document.createElement("button");
         offHeader.appendChild(closeOffcanvasButton);
         closeOffcanvasButton.type="button";
         closeOffcanvasButton.classList.add("btn-close");
         closeOffcanvasButton.dataset.dismiss="offcanvas";
         closeOffcanvasButton.setAttribute("aria-label","Close");

         let offcanvasBody = document.createElement("div");
         newOffcanvas.appendChild(offcanvasBody);

         let guts = document.createElement("div");
         offcanvasBody.appendChild(guts);
         guts.textContent="I will not close if you click outside of me.";
    });
});




 





