const currentPage = window.location.pathname;
    
            // Define which link matches which page
            const pages = {
                'index.html': 'home',
                'gallery.html': 'gallery',
                'about.html': 'about',
            };
    
            // Find the current page's ID
            const currentId = pages[currentPage.split('/').pop()];
    
            // If a match is found, apply the active class
            if (currentId) {
                document.getElementById(currentId).classList.add('active');
}

function goBack() {
    window. history. back();
}


const carousel = document.querySelector('.container-carousel');

let isDragging = false;
let startX, scrollLeft;

// Mouse Down Event
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

// Mouse Leave Event
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.classList.remove('active');
});

// Mouse Up Event
carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.classList.remove('active');
});

// Mouse Move Event
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    carousel.scrollLeft = scrollLeft - walk;
});

// Touch Events for Mobile Devices
let touchStartX, touchScrollLeft;

// Touch Start Event
carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = carousel.scrollLeft;
});

// Touch Move Event
carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 2; // Adjust sensitivity
    carousel.scrollLeft = touchScrollLeft - walk;
});












const menuCarousel = document.querySelector('.menu-under-container-carousel');

let isMenuDragging = false;
let menuStartX, menuScrollLeft;

// Mouse Down Event
menuCarousel.addEventListener('mousedown', (e) => {
    isMenuDragging = true;
    menuCarousel.classList.add('menu-active');
    menuStartX = e.pageX - menuCarousel.offsetLeft;
    menuScrollLeft = menuCarousel.scrollLeft;
});

// Mouse Leave Event
menuCarousel.addEventListener('mouseleave', () => {
    isMenuDragging = false;
    menuCarousel.classList.remove('menu-active');
});

// Mouse Up Event
menuCarousel.addEventListener('mouseup', () => {
    isMenuDragging = false;
    menuCarousel.classList.remove('menu-active');
});

// Mouse Move Event
menuCarousel.addEventListener('mousemove', (e) => {
    if (!isMenuDragging) return;
    e.preventDefault();
    const x = e.pageX - menuCarousel.offsetLeft;
    const walk = (x - menuStartX) * 2; // Multiply for faster scrolling
    menuCarousel.scrollLeft = menuScrollLeft - walk;
});

// Touch Events for Mobile Devices
let menuTouchStartX, menuTouchScrollLeft;

// Touch Start Event
menuCarousel.addEventListener('touchstart', (e) => {
    menuTouchStartX = e.touches[0].pageX;
    menuTouchScrollLeft = menuCarousel.scrollLeft;
});

// Touch Move Event
menuCarousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - menuTouchStartX) * 2; // Adjust sensitivity
    menuCarousel.scrollLeft = menuTouchScrollLeft - walk;
});


