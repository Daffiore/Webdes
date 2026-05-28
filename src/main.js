document.addEventListener('DOMContentLoaded', () => {
  // Menangkap elemen track slider beserta tombol kemudi kiri & kanan
const sliderTrack = document.getElementById('slider-track')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

    if (sliderTrack && prevBtn && nextBtn) {
    // penghitung lebar kartu produk ditambah jarak gap antar kartu
        const getScrollAmount = () => {
            const firstCard = sliderTrack.querySelector('.kartu-makanan')
    return firstCard ? firstCard.clientWidth + 24 : 300
    }

    // klik arrow kanan
    nextBtn.addEventListener('click', () => {
        sliderTrack.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        })
    })

    // klik arrow kiri
    prevBtn.addEventListener('click', () => {
        sliderTrack.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        })
    })
    }
})
