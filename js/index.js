// Your code goes here

// 1 'wheel'
const bodyStyle = document.getElementsByTagName('body');
for (var i = 0 ; i < bodyStyle.length; i++) {
    bodyStyle[i].addEventListener('wheel', e => {e.target.style.backgroundColor = '#DEECF2';});
 }
console.log(bodyStyle);

// 2 & 3 'mouseenter', 'mouseleave'
const navTags = Array.from(document.getElementsByClassName('nav-link'));
navTags.forEach(function(navTags){
        navTags.addEventListener('mouseenter', e => {e.target.style.color = 'goldenrod'});
        navTags.addEventListener('mouseleave', e => {e.target.style.color = 'black'});
    });

// 4 'mouseover'
const images = Array.from(document.getElementsByTagName('img'));
images.forEach(function(images) {
    images.addEventListener('mouseover', e => {e.target.style.borderRadius = '5rem';})
});
console.log(images);

// 5 'drag'
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('drag', e => {
    e.target.style.display = 'none';});
console.log(funBusImg);

// 6 'click'
const buttonStyle = document.querySelectorAll('.btn');
buttonStyle.forEach(function(buttonStyle){
    buttonStyle.addEventListener('click', e => {
        e.target.style.border = '3px solid #FFEBCD', 
        e.target.textContent = `You've Clicked Here!`});
    buttonStyle.addEventListener('mouseleave', e => {
        e.target.style.border = '1px solid #FFEBCD',
        e.target.textContent = `Sign Me Up!`});
});
console.log(buttonStyle);
