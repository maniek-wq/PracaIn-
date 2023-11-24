let preview = document.querySelectorAll("#tile");
let heartIcon = document.querySelectorAll(".fa-heart");
let crl = document.getElementsByClassName("carouselItems");
let iterator = 0;

let offcanvas = document.getElementById("offcanvasTop");


document.addEventListener("DOMContentLoaded", function () {
  const likedTiles = JSON.parse(localStorage.getItem('likedTiles')) || [];

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

        
        addToLiked(icon);
        if (parentTile) {
          parentTile.classList.add("active");
          }
        console.log("ID ikony po dodaniu do polubionych:", icon.getAttribute("data-unique-id"));
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
        console.log("ID ikony po usunięciu z polubionych:", icon.getAttribute("data-unique-id"));

        
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

    localStorage.setItem('likedTiles', JSON.stringify(likedTiles));

   
  }

  function removeFromLiked(icon) {
    const index = likedTiles.indexOf(icon.getAttribute("data-unique-id"));
    if (index !== -1) {
      likedTiles.splice(index, 1);
      localStorage.setItem('likedTiles', JSON.stringify(likedTiles));
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



let bookmark = document.querySelector(".fa-bookmark");

bookmark.addEventListener("click", function () {
 
  const header = document.querySelector(".mainHeader");
  const search = document.querySelector(".searchButton");
  header.remove();
  search.remove();

  let likedScreen = document.createElement("div");
  likedScreen.setAttribute("class", "likedScreen");
  document.body.appendChild(likedScreen);
  const myHeader = document.createElement("h4");
  likedScreen.appendChild(myHeader);
  myHeader.textContent="Polubione miejsca";
  myHeader.classList.add("myHeader");
  
 preview.forEach(function(showTileActive){
    if(showTileActive.classList.contains("active")){
      likedScreen.appendChild(showTileActive);
      showTileActive.style.display="flex";
    }
    if(!showTileActive.classList.contains("active")){
      showTileActive.remove();
    }
 });
 
});

let searchInput = document.getElementsByClassName("form-control")[0];
const searchButton = document.getElementById("button-addon2");
let isTagExisting = false;
let tiles = document.querySelectorAll('#tile');

searchButton.addEventListener("click", function () {
    console.log("szuka...");
    console.log(searchInput.value);
    searchValue = searchInput.value;
    console.log(searchValue + "Search value!!");

    tiles.forEach(function (tile) {
        if (tile.classList.contains(searchValue.toLowerCase())) {
            console.log("Znaleziono kafelek o klasie:", searchInput.value);
            isTagExisting = true;           
            tile.classList.remove("d-none");
        } 
        else {
            tile.classList.add("d-none");
        }
    });
});

