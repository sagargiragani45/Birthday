// script.js

// Password Protection
const passwordPage = document.getElementById('password-page');
const mainWebsite = document.getElementById('main-website');
const passwordInput = document.getElementById('password-input');
const unlockButton = document.getElementById('unlock-button');
const errorMessage = document.getElementById('error-message');

const secretWord = "forever"; // Change this to your secret word

unlockButton.addEventListener('click', () => {
  if (passwordInput.value.toLowerCase() === secretWord) {
    // Hide the password page and show the main website
    passwordPage.classList.add('hidden');
    mainWebsite.classList.remove('hidden');
    // Start playing background music automatically
    backgroundMusic.play();
    musicButton.textContent = 'Pause Music 🎵';
    // Trigger confetti effect
    confetti.render();
  } else {
    errorMessage.classList.remove('hidden');
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Play Background Music
const musicButton = document.getElementById('playMusic');
const backgroundMusic = document.getElementById('backgroundMusic');

musicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicButton.textContent = 'Pause Music 🎵';
  } else {
    backgroundMusic.pause();
    musicButton.textContent = 'Play Music 🎵';
  }
});

// Fade-In Animations on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, { threshold: 0.5 }); // Trigger animation when 50% of the element is visible

fadeInElements.forEach(element => {
  observer.observe(element);
});

// Confetti Effect
const confettiSettings = { target: 'confetti-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
