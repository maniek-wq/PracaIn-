let preview = document.querySelectorAll("#tile");
let heartIcon = document.querySelectorAll(".fa-heart");
let crl = document.getElementsByClassName("carouselItems");

preview.forEach(function(myTile){
  myTile.addEventListener("click",function(event){
    if(event.target.closest(".fa-heart")){}else{
    let previewScreen = document.createElement("div");
    previewScreen.setAttribute("class", "container-lg previewScreen d-flex flex-row-reverse bd-highlight");
    document.body.appendChild(previewScreen);
    document.body.style.overflow = "hidden";
    // <button type="button" class="btn-close" aria-label="Close"></button>

    const btnClose = document.createElement("button");
    btnClose.setAttribute("class","btn-close p-3 bd-highlight");
    btnClose.type="button";
    btnClose.ariaLabel="Close";
    previewScreen.appendChild(btnClose);

    btnClose.addEventListener("click",function(){
        previewScreen.remove();
        document.body.style.overflow = "auto";

    });
  }
  });
});

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

