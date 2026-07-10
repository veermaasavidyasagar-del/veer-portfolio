// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navItems = document.querySelectorAll('.nav-item');
const topNavLinks = document.querySelectorAll('.top-nav-link');

function getActiveSectionId() {
  let current = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120) {
      current = section.getAttribute('id');
    }
  });
  return current;
}

function updateNav() {
  const id = getActiveSectionId();

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-section') === id) {
      item.classList.add('active');
    }
  });

  topNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + id) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate stats counting up
function animateCounter(el) {
  const target = parseFloat(el.textContent);
  const isPercent = el.textContent.includes('%');
  const hasPlus = el.textContent.includes('+');
  const duration = 1400;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = value + (hasPlus ? '+' : '') + (isPercent ? '%' : '');
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Intersection observer for stat animation
const statNums = document.querySelectorAll('.stat-num');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => observer.observe(el));

// Fade-in animation for cards
const cards = document.querySelectorAll('.card');
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  cardObserver.observe(card);
});
