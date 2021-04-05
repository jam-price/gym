const about = document.getElementById('about-btn');
const gallery = document.getElementById('gallery-btn');
const showreel = document.getElementById('showreel-btn');
const contact = document.getElementById('contact-btn');
const nav = document.getElementById('nav-bar');
const header = document.getElementById('header');
const logo = document.getElementById('logo');
const galleryColor = "#7D9CBD"

function reset() {
    header.classList.remove('navBtnHead');
    header.classList.add('header');
    about.classList.remove('aboutSect', 'buttonShadow');
    gallery.classList.remove('gallerySect');
    showreel.classList.remove('showreelSect');
    contact.classList.remove('contactSect');
}

logo.addEventListener('click', reset);

about.addEventListener('click', () => {
    reset;
    about.classList.add('aboutSect', "buttonShadow");
    header.classList.remove('header');
    header.classList.add('navBtnHead');
});



gallery.addEventListener('click', () => {
    reset;
    gallery.classList.add('gallerySect', 'buttonShadow');
    header.classList.remove('header');
    header.classList.add('navBtnHead');
});


showreel.addEventListener('click', () => {
    reset;
    showreel.classList.add('showreelSect', 'buttonShadow')
    header.classList.remove('header');
    header.classList.add('navBtnHead');
});

contact.addEventListener('click', () => {
    reset;
    contact.classList.add('contactSect', 'buttonShadow');
    
});



