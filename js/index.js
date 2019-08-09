// Your code goes here

// 1 'wheel'
const bodyStyle = document.querySelector('body');

bodyStyle.addEventListener('wheel', e => {
        e.target.style.backgroundColor = '#DEECF2';});
// console.log(bodyStyle);

// 2 & 3 'mouseenter', 'mouseleave'
const navTags = Array.from(document.getElementsByClassName('nav-link'));
navTags.forEach(function(navTags){
        navTags.addEventListener('mouseenter', e => {
            e.target.style.color = 'goldenrod'
        });
        navTags.addEventListener('mouseleave', e => {
            e.target.style.color = 'black'
        });
    });

// 4 & 5 'mouseover', 'mousewheel'
const images = Array.from(document.getElementsByTagName('img'));
images.forEach(function(images) {
    images.addEventListener('mouseover', e => {e.target.style.borderRadius = '5rem';});
    images.addEventListener('mousewheel', mouseWheelHandler, false);
    
    function mouseWheelHandler(e) {
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        images.style.width = Math.max(50, Math.min(800, images.width + (30 * delta))) + "px";
        return false;
    };
});
    
// console.log(images);

// 6, 7 & 8 'drag', 'dragend' 'dblclick'
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('drag', e => {
    e.target.style.display = 'none';});
funBusImg.addEventListener('dragend', e => {
    e.target.style.display = 'flex';});
funBusImg.addEventListener('dblclick', e => {
    e.target.style.opacity = '0.8'});
// console.log(funBusImg);

// 9 'click'

const buttonStyle = document.querySelectorAll('.btn');
buttonStyle.forEach(function(buttonStyle){
    buttonStyle.addEventListener('click', e => {
        e.stopPropagation();
        e.target.style.border = '3px solid #FFEBCD', 
        e.target.textContent = `You've Clicked Here!`});
    buttonStyle.addEventListener('mouseleave', e => {
        e.target.style.border = '1px solid #FFEBCD',
        e.target.textContent = `Sign Me Up!`});
});
// console.log(buttonStyle);

// 10 'mousedown'

const logoStyle = document.querySelector('.logo-heading');
logoStyle.addEventListener('mousedown', e => {
    e.target.textContent = 'Super Fun Bus!'});

// Extra Work

document.addEventListener('keydown', (e) => {
    if(event.key === 'f') {
      alert('Thank You');
    }
  })

const payRespects = document.createElement('p');
payRespects.textContent = `Press F to Pay Respects`;
payRespects.style.font = '"Times New Roman", Times, Serif';
payRespects.style.fontStyle = 'italic';
payRespects.style.marginLeft = '38%';
document.querySelector('.intro h2').prepend(payRespects);

var navButton = document.createElement('button'), count = 0;
document.querySelector('.footer').prepend(navButton);
navButton.style.width = '15rem';
navButton.style.height = '2rem';
navButton.style.marginTop = '2rem';
navButton.style.marginRight = '38rem';
navButton.style.marginBottom = '2rem';
navButton.style.marginLeft = '48rem';
navButton.style.textAlign = 'center';
navButton.addEventListener('click', (e) => {
    count += 1;
    navButton.textContent = "Click Count:" + count;
});

const navStyle = document.querySelector('.main-navigation');
console.log(navStyle);