// === tsParticles Setup ===
tsParticles.load("particles-js", {
    background: { opacity: 0 },
    fpsLimit: 60,
    particles: {
        color: { value: "#00FFF7" },
        links: { color: "#00FFF7", distance: 150, enable: true, opacity: 0.2, width: 1 },
        move: { enable: true, speed: 0.5, direction: "none", random: true },
        number: { value: 60 },
        size: { value: 1.5 },
        opacity: { value: 0.5 }
    },
    detectRetina: true
});

// === Fade In on Scroll ===
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    faders.forEach(fader => observer.observe(fader));

    // === Header Shrink on Scroll ===
    const hero = document.getElementById("hero");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            hero.classList.add("shrink");
        } else {
            hero.classList.remove("shrink");
        }
    });

    // === Typing Animation (Hero) ===
    const typingElement = document.getElementById("typing-text");
    const phrases = [
        "Explore my interactive lab of IoT projects, systems, and ideas transforming the connected world",
        "Building connected solutions through hardware and cloud",
        "Transforming data into action with embedded systems",
        "Designing smart systems for a smarter future"
    ];

    let phraseIndex = 0;
    let letterIndex = 0;
    let typing = true;

    function type() {
        if (typing) {
            if (letterIndex < phrases[phraseIndex].length) {
                typingElement.textContent += phrases[phraseIndex].charAt(letterIndex);
                letterIndex++;
                setTimeout(type, 50);
            } else {
                typing = false;
                setTimeout(type, 2000);
            }
        } else {
            if (letterIndex > 0) {
                typingElement.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
                letterIndex--;
                setTimeout(type, 30);
            } else {
                typing = true;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            }
        }
    }

    type();

    // === Scroll to Top ===
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // === Smooth Scroll ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// === Loader ===
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// ========================================================================
// ✅ TAMBAHAN BARU: ANIMASI KETIK UNTUK BAGIAN BLOG
// ========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const blogTypingElement = document.getElementById("blog-typing-text");
    
    // Cek apakah elemen ada (hanya jalankan jika di halaman blog)
    if (!blogTypingElement) return;

    const blogPhrases = [
        "Articles & insights coming soon...",
        "Technical deep dives on IoT systems...",
        "Building the future, one line of code at a time...",
        "Exploring ESP32, MQTT, and embedded design..."
    ];

    let blogPhraseIndex = 0;
    let blogLetterIndex = 0;
    let blogTyping = true;

    function blogType() {
        if (blogTyping) {
            if (blogLetterIndex < blogPhrases[blogPhraseIndex].length) {
                blogTypingElement.textContent += blogPhrases[blogPhraseIndex].charAt(blogLetterIndex);
                blogLetterIndex++;
                setTimeout(blogType, 50);
            } else {
                blogTyping = false;
                setTimeout(blogType, 2000); // delay sebelum hapus
            }
        } else {
            if (blogLetterIndex > 0) {
                blogTypingElement.textContent = blogPhrases[blogPhraseIndex].substring(0, blogLetterIndex - 1);
                blogLetterIndex--;
                setTimeout(blogType, 30);
            } else {
                blogTyping = true;
                blogPhraseIndex = (blogPhraseIndex + 1) % blogPhrases.length;
                setTimeout(blogType, 500); // delay sebelum tulis ulang
            }
        }
    }

    // Jalankan animasi ketik untuk blog
    blogType();
});