// Your code goes here (mouseenter, mouseleave, mouseover, mouseout, load, click, dblclick, keydown, keypress, grab)
const contentSection = document.querySelector(".content-section");
contentSection.addEventListener("mouseenter", () => {
    contentSection.style.transform = "scale(1.2)";
    contentSection.style.transition = "transform 0.5s";
})
contentSection.addEventListener("mouseleave", () => {
    contentSection.style.transform = "scale(1)";
})

const funBus = document.querySelector('h2');
funBus.addEventListener('mouseover', function(){
    funBus.style.color = 'red';
})
funBus.addEventListener('mouseout', () =>{
    funBus.style.color = 'black'
})

window.addEventListener('load', function(e){
    alert('This page has loaded');
})

const button = document.querySelector('.btn');
button.addEventListener('click', function(event){
    event.target.style.color = 'black';
    event.stopPropagation();
})

document.querySelectorAll('.destination').forEach(e => {
    e.addEventListener('dblclick', () =>{
        e.style.backgroundColor = '#17A2B8';
    })
})

const body = document.querySelector("body");
const nav = document.querySelector(".main-navigation");
	body.addEventListener("keydown", function() {
	  nav.style.position = "absolute";
    })

const keyDown = document.querySelector('body');
keyDown.addEventListener('keypress', (event) =>{
    alert(`You pressed the "${event.key}" key`);
})

const headerImg = document.querySelector('.intro img');
headerImg.style.cursor = 'grab'
headerImg.addEventListener('drag', function(){
    headerImg.style.display = 'none'
})

const stopNav = document.querySelector('nav');
stopNav.addEventListener('click', function(event){
    event.preventDefault();
    alert('Nav will not refresh!')
})
