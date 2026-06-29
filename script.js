// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Rotating hero word
const words = ['web apps', 'mobile apps', 'APIs', 'dashboards', 'products'];
let wordIdx = 0;
const rotatingEl = document.getElementById('rotating-word');

function rotateWord() {
  rotatingEl.style.opacity = '0';
  rotatingEl.style.transform = 'translateY(8px)';
  setTimeout(() => {
    wordIdx = (wordIdx + 1) % words.length;
    rotatingEl.textContent = words[wordIdx];
    rotatingEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    rotatingEl.style.opacity = '1';
    rotatingEl.style.transform = 'translateY(0)';
  }, 300);
}

rotatingEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
setInterval(rotateWord, 2500);

// Scroll reveal
const revealEls = document.querySelectorAll('.project-card, .skill-group, .contact-layout, .section-header');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate send (replace with actual fetch to your backend/Formspree/EmailJS)
  setTimeout(() => {
    btn.style.display = 'none';
    success.style.display = 'block';
    e.target.reset();
  }, 1200);
}

// Nav active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + section.id) {
          link.style.color = '#f0eff8';
        }
      });
    }
  });
}, { passive: true });
