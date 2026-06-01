let sky = document.getElementById('vek5');
let moon = document.getElementById('vek4');
let back3 = document.getElementById('vek3');
let back2 = document.getElementById('vek2');
let back1 = document.getElementById('vek1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (sky) sky.style.transform = `translateY(${value * 0.8}px)`;
    if (moon) moon.style.transform = `translateY(${value * 0.6}px)`;
    if (back3) back3.style.transform = `translateY(${value * 0.4}px)`;
    if (back2) back2.style.transform = `translateY(${value * 0.2}px)`;
    if (back1) back1.style.transform = `translateY(${value * 0}px)`;
});

const foods = [
    {
        title: "Rendang",
        rating: " 4.9",
        desc: "Daging sapi khas Minang dengan rempah yang kaya dan gurih.",
        image: "img/rendang.jpg"
    },
    {
        title: "Sate Padang",
        rating: " 4.8",
        desc: "Sate dengan kuah kental khas Padang yang gurih dan pedas.",
        image: "img/sate padang.jpg",
    },
    {
        title: "Dendeng",
        rating: " 4.8",
        desc: "Daging tipis berbumbu yang dikeringkan dan digoreng dengan rasa gurih.",
        image: "img/dendeng.jpeg"
    }
];

let current = 0;

function updateCarousel() {
    const left = (current - 1 + foods.length) % foods.length;
    const right = (current + 1) % foods.length;

    document.getElementById("mainImage").src = foods[current].image;
    document.getElementById("mainTitle").innerText = foods[current].title;
    document.getElementById("mainRating").innerText = foods[current].rating;
    document.getElementById("mainDesc").innerText = foods[current].desc;
    document.getElementById("leftImage").src = foods[left].image;
    document.getElementById("rightImage").src = foods[right].image;
}

// Menjadikan fungsi ini global agar bisa dipanggil oleh onclick di HTML
window.nextSlide = function() {
    current++;
    if (current >= foods.length) {
        current = 0;
    }
    updateCarousel();
};

window.prevSlide = function() {
    current--;
    if (current < 0) {
        current = foods.length - 1;
    }
    updateCarousel();
};

updateCarousel();
