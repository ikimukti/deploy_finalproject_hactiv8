document.addEventListener("DOMContentLoaded", function() {
  // Ambil semua elemen menu dari top menu
  const menuItems = document.querySelectorAll(".top-menu ul li a");

  // Tambahkan event listener untuk setiap elemen menu
  menuItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
      // Hentikan aksi default dari link
      event.preventDefault();

      // Ambil target (id elemen tujuan) dari link yang diklik
      const targetId = item.getAttribute("href").substring(1);

      // Cari elemen dengan id yang sesuai
      const targetElement = document.getElementById(targetId);

      // Gulir ke elemen tersebut dengan efek smooth
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Sesuaikan dengan offset yang diinginkan
          behavior: "smooth" // Gunakan efek scroll yang halus
        });
      }
    });
  });
});

// Ambil semua tombol "Read More"
const readMoreButtons = document.querySelectorAll('.read-more-button');

// Loop melalui setiap tombol dan tambahkan event listener
readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const experienceDetails = button.parentElement;
    const icon = button.querySelector('i'); // Ambil elemen ikon di dalam tombol

    experienceDetails.classList.toggle('expanded'); // Toggle kelas 'expanded'

    // Ubah ikon tombol berdasarkan kondisi
    if (experienceDetails.classList.contains('expanded')) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
      button.textContent = 'Read Less';
    } else {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
      button.textContent = 'Read More';
    }
  });
});


// Pada bagian JavaScript
const phrases = [
    'Tools Manager in SMKN 1 Kediri',
    'Data Scientist',
    'Cloud Architect & DevOps',
    'Owner of ikimukti.com'
];

let currentPhraseIndex = 0;
let currentPhrase = '';
let charIndex = 0;
let isTyping = true;
let typingSpeed = 100; // Kecepatan mengetik (dalam milidetik)

const typingText = document.getElementById('typing-text');
const typingCursor = document.getElementById('typing-cursor');

function typeText() {
    if (isTyping) {
        currentPhrase = phrases[currentPhraseIndex];
        const textToType = currentPhrase.substring(0, charIndex + 1);
        typingText.innerHTML = textToType;
        charIndex++;
        if (charIndex <= currentPhrase.length) {
            setTimeout(typeText, typingSpeed);
        } else {
            isTyping = false;
            setTimeout(eraseText, 1000); // Tunggu 1 detik sebelum menghapus teks
        }
    } else {
        isTyping = false;
        setTimeout(eraseText, typingSpeed / 2); // Tunggu sebentar sebelum menghapus teks
    }
}

function eraseText() {
    const textToErase = currentPhrase.substring(0, charIndex);
    typingText.innerHTML = textToErase;
    charIndex--;
    if (charIndex >= 0) {
        setTimeout(eraseText, typingSpeed / 2); // Kecepatan penghapusan setengah dari kecepatan mengetik
    } else {
        // Teks telah dihapus, lanjutkan ke frase berikutnya
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        isTyping = true;
        setTimeout(typeText, typingSpeed / 2); // Tunggu sebentar sebelum mengetik frase berikutnya
    }
}

// Mulai efek mengetik
typeText();