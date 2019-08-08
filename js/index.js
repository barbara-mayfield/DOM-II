// Your code goes here

const navTags = Array.from(document.getElementsByClassName('nav-link'))
    .forEach(function(navTags){
        navTags.addEventListener("mouseenter", e => {e.target.style.color = 'goldenrod'});
        navTags.addEventListener("mouseleave", e => {e.target.style.color = 'black'});
    });