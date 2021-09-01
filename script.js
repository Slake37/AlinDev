let hamMenu = document.querySelector('.ham-menu');
let links = document.querySelectorAll('.link-btn');
let closeBtn = document.querySelector('.close-btn');
let navLinks = document.querySelector('.navigation-links');
let inputName = document.querySelector('.input-name');
let inputAreaName = document.querySelector('.input-area-name');
let inputEmail = document.querySelector('.input-email');
let inputAreaEmail = document.querySelector('.input-area-email');
let inputMessage = document.querySelector('.input-message');
let inputAreaMessage = document.querySelector('.input-area-message');

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
});


inputAreaName.addEventListener('click', function(){
    inputName.classList.add('select-label')
})

inputAreaEmail.addEventListener('click', function(){
    inputEmail.classList.add('select-label')
})

inputAreaMessage.addEventListener('click', function(){
    inputMessage.classList.add('select-label')
})

