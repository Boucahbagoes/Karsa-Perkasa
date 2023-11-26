// header pertama page
const header = document.querySelector('.header');
let lastScrollPosition = 0;

function handleScroll() {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition === 0 || currentScrollPosition < lastScrollPosition) {
        // Scroll up or at the top, show the header
        header.classList.remove('hidden');
        header.classList.add('opaque');
    } else {
        // Scroll down, hide the header
        header.classList.remove('opaque');
        header.classList.add('hidden');
    }
    lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);

  //  sticky navbar
header.classList.toggle('sticky', window.scrollY > 100);


// baground judul
const judul = document.querySelector('.judul');
const judulImages = ['/asset/img-int4.jpg', '/asset/img-cons4.jpg', '/asset/img-int3.jpg', '/asset/img-ahli1.jpg',];
let judulIndex = 0;

function changeJudulBackground() {
    judul.style.backgroundImage = `url(${judulImages[judulIndex]})`;
    judulIndex = (judulIndex + 1) % judulImages.length;
}

window.addEventListener('load', () => {
    setInterval(changeJudulBackground, 5000);
});

// scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

const portfolioContainer = document.querySelector('.portfolio-container');

const images = [
    '/asset/img-ahli3.jpg',
    '/asset/img-ars2.jpg',
    '/asset/img-cons3.jpg',
    '/asset/img-int1.jpg',
    '/asset/img-ahli2.jpg',
    '/asset/img-cons1.jpg',
    '/asset/img-int5.jpg',
    '/asset/img-cons2.jpg'

    // Tambahkan URL gambar portofolio lainnya di sini
];

images.forEach(image => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');
    portfolioItem.style.backgroundImage = `url(${image})`;
    portfolioContainer.appendChild(portfolioItem);
});

// icon whatsapp
const fixedIcon = document.querySelector('.fixed-icon');

fixedIcon.addEventListener('click', function() {
    window.open('https://wa.me/6285708049508');
});

// typed js
const typed = new Typed('.multiped-text',{
    strings: ['Renovation', 'Build a House', 'Building Contractor','Architect','Home Interior Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



  