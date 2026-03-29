document.addEventListener('DOMContentLoaded', () => {
  /* =====================
     1. Hamburger Menu Logic 
     ===================== */
  const menuToggle = document.getElementById('menu-toggle');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Toggle body scroll
    if (navOverlay.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Event listener for main toggle button
  if (menuToggle && navOverlay) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navOverlay.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  /* =====================
     2. Scroll Fade-in Animation 
     ===================== */
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in-section');
  fadeElements.forEach(el => observer.observe(el));


  /* =====================
     3. Auto Update Footer Year 
     ===================== */
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
