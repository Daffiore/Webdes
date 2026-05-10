const { createApp, ref } = Vue;
createApp({
    setup() {
        const timelines = ref([
            { date: '20 February 2026', title: 'Pembukaan Pendaftaran Panitia Paradoks (Misal)' },
            { date: '25 February 2026', title: 'Seleksi Tahap 1' },
            { date: '28 February 2026', title: 'Pengumuman Hasil Akhir' }
        ]);
        return { timelines };
    }
}).mount('#app');