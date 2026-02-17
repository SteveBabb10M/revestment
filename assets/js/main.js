// Revestment 1765 - Main JavaScript

(function() {
  'use strict';

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function() {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(event) {
      if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for anchor links (if not handled by CSS)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Gallery lightbox (simple version)
  // For a more robust solution, consider adding a lightbox library
  const galleryItems = document.querySelectorAll('.gallery-item a');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // For now, let images open in new tab
      // A proper lightbox can be added later if needed
      this.setAttribute('target', '_blank');
    });
  });

})();
