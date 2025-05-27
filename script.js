// script.js
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  body.classList.remove('dark');
  modeToggle.checked = false;
}

modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    body.classList.add('dark');
    body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.add('light');
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

window.addEventListener('scroll', () => {
  const bgImage = document.querySelector('.parallax');
  const scrollPosition = window.scrollY;
  bgImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

const sections = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));