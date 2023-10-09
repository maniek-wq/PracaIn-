let preview = document.querySelectorAll(".tile");
let heartIcon = document.querySelectorAll(".fa-heart");

isExisting = true;
isCreated = false;

// if(isExisting){
//   preview.addEventListener("click",function(){
//         console.log("klik!");
//         let con = document.getElementById("mainContainer");
//         let navbar = document.getElementById("nav")
//         const previewTile = document.createElement("div");
//         previewTile.setAttribute("class","previewTile");
//         previewTile.setAttribute("id","tileId")
//         navbar.appendChild(previewTile);
//         isCreated = true;
//         const closeButton = document.createElement("button");
//         closeButton.setAttribute("class","btn-close");
//         closeButton.setAttribute("id","myCloseBtn");
//         closeButton.ariaLabel="Close";
//         closeButton.type="button";
//         previewTile.appendChild(closeButton);
//         closeButton.addEventListener("click",function(){
//             previewTile.remove();
//         });

// });
// }
let isLiked = false;
heartIcon.forEach(function(icon) {
  icon.addEventListener("click", function() {
    console.log("klik!");

    if (!isLiked) {
      
      icon.classList.remove("fa-regular");
      icon.classList.remove("fa-heart");
      icon.classList.add("fa-sharp");
      icon.classList.add("fa-solid");
      icon.classList.add("fa-heart");
      icon.style.color = "#e92907";
      isLiked = true;
      console.log(isLiked);
    } else {
      
      icon.classList.remove("fa-sharp");
      icon.classList.remove("fa-solid");
      icon.classList.remove("fa-heart");
      icon.classList.add("fa-regular");
      icon.classList.add("fa-heart");
      icon.style.color="rgb(30 48 80)";
      isLiked = false;
      console.log(isLiked);
    }
  });
});

