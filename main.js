const intersectionCallback = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            let animation = entry.target.getAttribute('data-animation');
            let delay = entry.target.getAttribute('data-delay');
            entry.target.classList.add(animation);
            delay && entry.target.classList.add('animate__delay-' + delay + 's');
        }
    }
}

const observer = new IntersectionObserver(intersectionCallback);

const items = document.querySelectorAll('.animate__animated');

for (const item of items) {
    observer.observe(item);
}

const nav = document.getElementById("navbar");

window.addEventListener( "scroll", () => (window.scrollY >= 150) ? nav.classList.remove('py-3') : nav.classList.add('py-3'))