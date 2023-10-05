let show = true;
const menuContet = document.querySelector('.content');
const menuToggle = menuContet.querySelector('.menu-toggle')


menuToggle.addEventListener('click', () => {
    menuContet.classList.toggle('on', show);
    show = !show;
});