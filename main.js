const about=document.querySelector("#description")
const name=document.querySelector("#name")
const position=document.querySelector("#position")
const image=document.querySelector("#person-img")
const next=document.querySelector("#next")
const prev=document.querySelector("#prev")
const btn=document.querySelector('.btn')
let i=0
const details=[
    {   id:1,
        name:"Tanya Sinclair",
        position:"UX Engineer",
        about:` “ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        image:"./images/image-tanya.jpg"
    },
    {
        id:2,
        name:"John Tarkpor",
        position:"Junior Front-end Developer",
        about:`“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ” `,
        image:"./images/image-john.jpg"
    }
]
next.addEventListener("click",()=>{
    i=1
    updateDetails()
})
prev.addEventListener("click",()=>{
    i=0
    updateDetails()
})
window.addEventListener("keydown",(e)=>{
    if(e.key=="ArrowLeft"){
        i=0
    }
    if(e.key=="ArrowRight"){
        i=1
    }
    updateDetails()
})
function updateDetails(){
    position.innerHTML=details[i].position
    name.innerHTML=details[i].name
   about.innerHTML=details[i].about
   image.src=details[i].image
}
