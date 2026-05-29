// Mengambil elemen berdasarkan ID
let jeneng = document.getElementById('judul');
let moon = document.getElementById('vek4');
let back1 = document.getElementById('vek3');
let back2 = document.getElementById('vek2');
let back3 = document.getElementById('vek1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (jeneng) jeneng.style.marginTop = value * -0.5 + 'px';
    if (moon) moon.style.transform = `translateY(${value * 0.3}px)`;
    if (back1) back1.style.transform = `translateY(${value * -0.1}px)`;
    if (back2) back2.style.transform = `translateY(${value * -0.15}px)`;
});
