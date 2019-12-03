// Your code goes here (mouseenter, mouseleave, mouseover, mouseout, load)
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

// const textContent = document.querySelector(".intro");
// textContent.addEventListener('scroll', () => {
//     document.querySelector('p').innerHTML = "This this scrolling in div"
// })
// window.addEventListener('load', (event) =>{
//     console.log('Page is fully loaded');
// });
window.addEventListener('load', function(e){
    alert('This page has loaded');
})

const button = document.querySelector('.btn');
button.addEventListener('click', function(event){
    event.target.style.color = 'black';
    EventTarget.stopPropagation();
})