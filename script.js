let preview = document.getElementById("tile");

isExisting = true;
isCreated = false;

if(isExisting){
  preview.addEventListener("click",function(){
        console.log("klik!");
        let con = document.getElementById("mainContainer");
        let navbar = document.getElementById("nav")
        const previewTile = document.createElement("div");
        previewTile.setAttribute("class","previewTile");
        previewTile.setAttribute("id","tileId")
        navbar.appendChild(previewTile);
        isCreated = true;
        const closeButton = document.createElement("button");
        closeButton.setAttribute("class","btn-close");
        closeButton.setAttribute("id","myCloseBtn");
        closeButton.ariaLabel="Close";
        closeButton.type="button";
        previewTile.appendChild(closeButton);
        closeButton.addEventListener("click",function(){
            previewTile.remove();
        });

});
}


