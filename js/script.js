// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('open');
}

// Scroll nav shadow
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('scrolled', window.scrollY > 20);
  triggerAnimations();
});

// Intersection animations

function triggerAnimations() {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) el.classList.add('visible');
  });
}

// Form submit
function submitForm() {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-message').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  document.getElementById('contact-form-container').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

// Active link highlight (multi-page)
function highlightActiveLink() {
  const currentPage = location.pathname.split("/").pop(); 
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (
      link.getAttribute('href') === currentPage ||
      (currentPage === "" && link.getAttribute('href') === "index.html")
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Init
window.addEventListener('load', () => {
  highlightActiveLink();
  setTimeout(triggerAnimations, 200);
});