const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
navToggle.addEventListener("click", function(){
     //links.classList.toggle("show-links")
            //OR
     if(links.classList.contains("show-links")){
          links.classList.remove("show-links")
     }else{
          links.classList.add("show-links")
     }
})

/*switch day and night scene*/
const elementItems = [
     {id: 1,
      scene: "Day-Scene",
      img: "images (2).png",
      video: "1358602487.mp4"   
     },
     {
      id: 2,
      scene: "Night-Scene",
      img: "images.png",
      video: "hero-day.mp4" 
     }
]

const dayBtn = document.querySelector(".day-btn")
const nightBtn = document.querySelector(".night-btn")
const scene = document.querySelector(".scene")
const dayImg = document.querySelector(".day-img")
const videoClip = document.querySelector(".video-clip")
let currentItem = 0

window.addEventListener("DOMContentLoaded", mySwitch)

function mySwitch(){
     let item = elementItems[currentItem]
     scene.innerHTML = item.scene
     dayImg.src = item.img
     videoClip.src = item.video
     console.log("clicked")
}
dayBtn.addEventListener("click", function(){
     currentItem++
     if(currentItem < elementItems.length - 1){
          currentItem = 0
     }
     /*if(dayBtn.classList.contains("day-btn")){
          dayBtn.classList.add("night-btn")
     }*/
     mySwitch()
})

/*nightBtn.addEventListener("click", function(){
     currentItem++
     if(currentItem < elementItems.length - 1){
          currentItem = 0
     }
     mySwitch()
})*/

const musicBtn = document.querySelector(".sound-btn")
const video = document.querySelector(".video-clip")
const musicOn = document.querySelector(".music-on")
 musicBtn.addEventListener("click", function(){
     video.volume 
     musicOn.innerHTML = "Music off"
     
 })