// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuOpenIcon.classList.toggle('hidden');
    menuCloseIcon.classList.toggle('hidden');
});

// --- Close mobile menu on link click ---
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    });
});

// --- Header scroll effect ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.add('py-4');
        header.classList.remove('py-2');
    }
});

// --- Typing Animation ---
const typingText = document.getElementById('typing-text');
const roles = ["Web Developer.", "Backend Developer.", "Problem Solver."];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
}
document.addEventListener('DOMContentLoaded', type);

// --- Contact Form ---
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aksi form di sini (contoh: kirim ke API atau service)

    // Tampilkan pesan sukses (simulasi)
    formMessage.textContent = 'Terima kasih! Pesan Anda telah terkirim.';
    formMessage.className = 'mb-4 text-center p-3 rounded-lg bg-green-900 text-green-300';
    contactForm.reset();

    // Sembunyikan pesan setelah beberapa detik
    setTimeout(() => {
        formMessage.className = 'mb-4 text-center hidden';
    }, 5000);
});

// --- Footer Current Year ---
document.getElementById('current-year').textContent = new Date().getFullYear();

// --- Scroll Reveal Animation ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0');
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});

// Keyframes untuk animasi fade-in
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {opacity: 0; transform: translateY(20px); }
    to {opacity: 1; transform: translateY(0); }
            }
    .animate-fade-in {
        opacity: 1 !important;
    transform: translateY(0) !important;
    animation: fadeIn 0.8s ease-out forwards;
            }
    `;
document.head.appendChild(style);
