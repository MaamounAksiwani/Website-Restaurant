const dark = document.querySelector(".moon-icon");
const allitems = document.querySelectorAll("body, nav,.footer__social");
const light = document.querySelector(".sun-icon");

dark.addEventListener('click', () => {
    allitems.forEach(item => {
        item.classList.add('active');

    });
});

light.addEventListener('click', () => {
    allitems.forEach(item => {
        item.classList.remove('active');

    });
});

function removeSunicon() {
    const dark = document.querySelector(".moon-icon");
    const light = document.querySelector(".menu-list-items ul li:last-child");

    dark.style.display = 'none';
    light.style.display = 'block';
}

function removeMoonIcon() {
    const dark = document.querySelector(".moon-icon");
    const light = document.querySelector(".menu-list-items ul li:last-child");
    dark.style.display = 'block';
    light.style.display = 'none';

}


window.onscroll = function() {
    scroll()
};

function scroll() {
    const button_scrrll = document.querySelector('.scroll');
    const nav = document.querySelector("nav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button_scrrll.style.display = 'block';
        nav.classList.add("scrolldown");
    } else {
        button_scrrll.style.display = 'none';
        nav.classList.remove("scrolldown");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}