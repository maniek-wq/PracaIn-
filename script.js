let preview = document.querySelectorAll("#tile");
let heartIcon = document.querySelectorAll(".fa-heart");
let crl = document.getElementsByClassName("carouselItems");



preview.forEach(function(myTile){
  myTile.addEventListener("click",function(event){
    if(event.target.closest(".fa-heart")){}else{
    let previewScreen = document.createElement("div");
    previewScreen.setAttribute("class", "container-lg previewScreen d-flex flex-row-reverse bd-highlight shadow-sm");
    document.body.appendChild(previewScreen);
    document.body.style.overflow = "hidden";
    

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

    if (icon.classList.contains("unactive")) {
      icon.classList.add("beat-animation");
      icon.classList.remove("fa-regular");
      icon.classList.remove("fa-heart");
      icon.classList.add("fa-sharp");
      icon.classList.add("fa-solid");
      icon.classList.add("fa-heart");
      icon.classList.remove("unactive");
      icon.classList.add("actives");
      icon.style.color = "#e92907";
      icon.addEventListener("animationend", function() {
        icon.classList.remove("beat-animation");
      });
    } 
    
   else if(icon.classList.contains("actives")){
            icon.classList.add("unactive");
            icon.classList.remove("fa-sharp");
            icon.classList.remove("fa-solid");
            icon.classList.remove("fa-heart");
            icon.classList.add("fa-regular");
            icon.classList.add("fa-heart");
            icon.classList.remove("active");
            icon.style.color = "rgb(30 48 80)";
            icon.classList.add("shake-animation");
            icon.addEventListener("animationend", function() {
              icon.classList.remove("shake-animation");
            });
      }
  });
  
});



// data-bs-container="body" 
// data-bs-toggle="popover" 
// data-bs-placement="top" 
// data-bs-content="Dodano do ulubionych"





 
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



