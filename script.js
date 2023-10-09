const rentButton = document.getElementById("btnradio1");
const findButton = document.getElementById("btnradio2")

let isRentScreenCreated = false;
let isFindScreenCreated = false;

// if (rentButton) {
//     rentButton.addEventListener("click", function () {
//         if (isFindScreenCreated) {
//             findScreen.remove();
//             isFindScreenCreated = false;
//         }

//         if (!isRentScreenCreated) {
//             let rentScreen = document.createElement("div");
//             rentScreen.setAttribute("id", "rentScreen");
//             rentScreen.setAttribute("class", "sticky-top");
//             document.body.appendChild(rentScreen);
//             isRentScreenCreated = true;
//             rentScreen.textContent="Wynajmij jakiś lokal!";
//             const rentingSite = document.createElement("section");
//             rentingSite.setAttribute("class","container");
//             rentScreen.appendChild(rentingSite);

//         }
        
//     });
// }

// findButton.addEventListener("click", function () {
//     if (isRentScreenCreated) {
//         rentScreen.remove();
//         isRentScreenCreated = false;
//     }

//     if (!isFindScreenCreated) {
//         let findScreen = document.createElement("div");
//         findScreen.setAttribute("id", "findScreen");
//         document.body.appendChild(findScreen);
//         isFindScreenCreated = true;
//         findScreen.textContent = "Znajdź miejsce na imprezę!";
        
//     }
// });



