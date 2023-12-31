document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const countdownTextElement = document.getElementById('countdownText');
    const greetingsElement = document.getElementById('greetings');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Set countdown time to New Year (1 Januari tahun berikutnya)
    const currentDate = new Date();
    const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);

    // Fungsi untuk menggulir dari atas ke bawah otomatis
    function autoScroll() {
        document.documentElement.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    // Fungsi untuk memperbarui penurunan waktu
    function updateCountdown() {
        const currentDate = new Date();
        const timeRemaining = newYearDate - currentDate;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            showGreetings();
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            daysElement.innerHTML = `<h2>${days} Hari</h2>`;
            hoursElement.innerHTML = `<h2>${hours} Jam</h2>`;
            minutesElement.innerHTML = `<h2>${minutes} Menit</h2>`;
            secondsElement.innerHTML = `<h2>${seconds} Detik</h2>`;

            // Ganti teks pada elemen countdownText
            countdownTextElement.innerHTML = `<span class="animate__animated animate__fadeInDown text-white w-auto">${timeRemaining > 1000 ? 'Menunggu Tahun Baru!' : 'Selamat'}</span>`;

            requestAnimationFrame(updateCountdown);
        }
    }

    // Fungsi untuk menampilkan ucapan terima kasih
    function showGreetings() {
        countdownElement.style.display = 'none';
        greetingsElement.style.display = 'block';
        greetingsElement.classList.add('animate__animated', 'animate__fadeInUp');
        playBacksound();

        // Auto scroll ke bawah setelah menampilkan ucapan terima kasih
        autoScroll();
    }

    // Fungsi untuk memainkan backsound
    function playBacksound() {
        const audio = new Audio('2.mp3');
        audio.preload = 'auto';
        audio.volume = 0.1;
        audio.autoplay = true;
        audio.addEventListener('ended', function () {
            showThankYou();
        });
        audio.play();
    }

    // Fungsi untuk menampilkan ucapan terima kasih
    function showThankYou() {
        const thankYouElement = document.createElement('div');
        thankYouElement.innerHTML = `
            <h3>Terima kasih telah menjadi bagian dari hidupku.</h3>
            <p>Semoga tahun baru ini membawa kebahagiaan dan kesuksesan untuk kita berdua.</p>
            <p>With love, Amel</p>
        `;
        greetingsElement.appendChild(thankYouElement);
    }

    // Memulai interval countdown dan menyimpan referensi ke countdownInterval
    const countdownInterval = setInterval(updateCountdown, 1000);

    // updateCountdown(); // Ini seharusnya tidak diperlukan karena kita menggunakan setInterval
});
