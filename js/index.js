// // Your code goes here

// // const navLinks = document.querySelector('nav')

// // navLinks.addEventListener('click', event => {
// //     event.target.style.backgroundColor = 'aquamarine'
// // })

// // const destinationTitle = document.querySelector('h4')


const h1     = document.querySelector('h1');
const header = document.querySelector('header');
const body   = document.querySelector('body')
const h2     = document.querySelector('h2');
const h4     = document.querySelector('h4');

//wheeldown 
document.addEventListener('wheel', function(){
    body.style.backgroundColor = "yellow"
    h2.style.backgroundColor = "lavender"
});

//mouseover
h2.addEventListener('mouseover', function(){
    h2.style.color = "red"
    body.style.backgroundColor = "aquamarine"
});

header.addEventListener('mouseover', function(){
    header.style.backgroundColor = "orange"
    body.style.backgroundColor = "grey"
});

// mouseleave
header.addEventListener('mouseleave',function(){
    header.style.backgroundColor = "yellow";
});

//keydown
document.addEventListener('keydown', function(){
    header.style.backgroundColor = "lavender"
    body.style.backgroundColor = "grey"

});

header.addEventListener('load', function(){
    header.style.backgroundColor = "grey";
});

h1.addEventListener('load', function(){
    h1.style.color = "blue"
});

//scroll
window.addEventListener('scroll',function(){
    header.style.backgroundColor = "aquamarine";
});

//password bar
const password = document.querySelector('input[type="password"]');
password.addEventListener('focus', (event) => {
  event.target.style.background = 'black';    
});

password.addEventListener('blur', (event) => {
    event.target.style.background = '';    
});

//online and offline events
  if (navigator.onLine){
    body.style.backgroundColor = "grey";
  }

body.addEventListener('online',function(){
    body.style.backgroundColor = "orange";
    header.style.backgroundColor = "blue";
}); 

body.addEventListener('offline', function(){
        body.style.backgroundColor = "turquoise";
        body.style.color = "white";
        header.style.backgroundColor = "blue";      
  });

document.querySelector("nav").addEventListener("click", function(event) {
    event.preventDefault();
}, false);


//click preventDefault()

const navTags = document.querySelectorAll('.nav-link');
for(let i=0 ; i<navTags.length; i++){
    navTags[i].addEventListener('click',function(){      
        header.style.backgroundColor='white';       
    })
}

//PREVENT propagation
header.addEventListener('click',function(){
    header.style.backgroundColor="lavender";
})
navTags.forEach(navTag => navTag.addEventListener('click',function(e){
    navTags.style.backgroundColor ="aquamarine";
    e.stopPropagation();
}))
function eventPropagation (e){ 
    header.style.backgroundColor="green";
    e.stopPropagation();
  }
navTags.forEach(navTag => navTag.addEventListener('click',eventPropagation,false));

//Stretch
import {gsap} from 'gsap'; 
gsap.from(".img-fluid", {rotation: 30, x: 120, duration: 1});
gsap.from(".hero-img", {rotation: 20, x: 120, scale: 2, duration: 1});