let menuButton = document.getElementById("menu-button");
let nav = document.getElementById("nav")


menuButton.addEventListener("click",function() { 
    nav.classList.toggle("closed")
    nav.classList.toggle("close-mobile")
})