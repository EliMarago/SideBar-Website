// CLASS LIST 
const arrow  = document.getElementById ("bi-1")
const text = document.querySelector(".text-container")
const image = document.querySelector(".pc-img")
const image2 = document.querySelector(".pc-img-1")
const arrow2 = document.querySelector(".bi--2")
const text2 = document.querySelector(".text-container-2")
////// ////// ////// ////// ////// ////// ////// 
// MENU BAR
const siderBar = document.querySelector(".siderbar-toggle")
const menu =  document.querySelector(".sidebar")
const btnClose = document.querySelector(".close-btn")
////  //// //// //// //// //// //// 
image.classList.add("blur")
image2.classList.add("blur")

//// //// //// //// //// //// //// //// 
arrow.addEventListener("click", function() {
    if (text.classList.contains("show")) {
        text.classList.remove("show");
        setTimeout(() => {
            text.style.display = "none";
            image.classList.add("blur")
        }, 1000);
         // Attendi la fine della transizione per nascondere l'elemento
    } else {
         image.classList.contains("blur")
        text.style.display = "block";
        setTimeout(() => {
            text.classList.add("show");
            image.classList.remove("blur")
        }, 1000); // Piccolo ritardo per garantire che la proprietà display sia applicata prima della transizione
    }
});

arrow2.addEventListener("click",function(){
    if (text2.classList.contains("show")) {
        text2.classList.remove("show");
        setTimeout(() => {
            text2.style.opacity = "1";
             text2.style.display = "block";
             image2.style.filter = "blur(0px)"
        }, 20000);
         // Attendi la fine della transizione per nascondere l'elemento
    } else {
        text2.style.opacity = "1";
        text2.style.display = "block";
        image2.style.filter = "blur(0px)"
        setTimeout(() => {
            text2.style.opacity = "0"
    text2.style.display = "none";
    image2.style.filter = "blur(3px)"
        }, 2000); // Piccolo ritardo per garantire che la proprietà display sia applicata prima della transizione
    }
});

siderBar.addEventListener("click",function(){
   if(menu.style.transform = "translate(-100%)"){
    setTimeout(()=>{
        menu.style.transform = "translate(0)"
    },100)
   }
})
btnClose.addEventListener("click",function(){
    if(menu.style.transform = "translate(0)"){ 
        setTimeout(()=>{
            menu.style.transform = "translate(-100%)"
        },100)
      }
})