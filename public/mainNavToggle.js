let mainMenuButton = document.getElementById("main-toggle");
let mainNav = document.getElementById("main-menu")


mainMenuButton.addEventListener("click",function() { 
    mainNav.classList.toggle("open")
})