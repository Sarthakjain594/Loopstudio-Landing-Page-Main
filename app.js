let hambtn = document.querySelector(".ham");
let container = document.querySelector(".container");
let menuscreen = document.querySelector(".black-scr-menu");
let closebtn = document.querySelector("#ham-close");
let menuul = document.querySelector("#nav-ul")

hambtn.addEventListener("click" , ()=> {
    
        menuscreen.style.display = "block"
        closebtn.style.display = "block"
        menuul.style.display = "block"
    
});

closebtn.addEventListener("click" , ()=>{
    if ( menuscreen.style.display === "block") {
        menuscreen.style.display = "none"
        closebtn.style.display = "none"
        menuul.style.display = "none"
    }
})
