let hamMenu = document.querySelector('.ham-menu');
let links = document.querySelectorAll('.link-btn');
let closeBtn = document.querySelector('.close-btn');
let navLinks = document.querySelector('.navigation-links')

hamMenu.addEventListener('click', function(){
    navLinks.classList.remove('close');
    navLinks.classList.add('open');
});

closeBtn.addEventListener('click', function(){
    navLinks.classList.add('close');
    navLinks.classList.remove('open');
})

navLinks.addEventListener('click', function(){
    navLinks.classList.add('close');
    navLinks.classList.remove('open');
})