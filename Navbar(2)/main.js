const toggleBtn = document.querySelector('.navbar__hamberger');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.nabar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

