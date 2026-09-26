/* ==========================================================================
   VIGNESHWAR KANNAN — PORTFOLIO SCRIPT (ZERO LAG & LIGHTWEIGHT)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCategoryFilters();
  initModalEngine();
});

/* ── NAVBAR SCROLL LOGIC ── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Observer
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ── CATEGORY FILTERING ── */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* ── ZERO-LAG MODAL ENGINE ── */
function initModalEngine() {
  const backdrop = document.getElementById('modal-backdrop');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalExtLink = document.getElementById('modal-ext-link');
  const modalLoader = document.getElementById('modal-loader');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop || !modalIframe) return;

  // Open Modal Function (Exposed globally)
  window.openModal = function(type, title, url, extUrl) {
    modalTitle.textContent = title || 'Project Preview';
    modalBadge.textContent = type || 'Preview';
    modalExtLink.href = extUrl || url || '#';
    
    // Show loader and set source
    modalLoader.classList.remove('hidden');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Lazy set iframe src to prevent background lag
    modalIframe.src = url;

    modalIframe.onload = () => {
      modalLoader.classList.add('hidden');
    };
  };

  // Close Modal Function (Exposed globally)
  window.closeModal = function() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    
    // Completely destroy iframe src to release browser memory instantly
    setTimeout(() => {
      modalIframe.src = 'about:blank';
      modalLoader.classList.remove('hidden');
    }, 300);
  };

  // Event Listeners for Close
  closeBtn.addEventListener('click', window.closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      window.closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      window.closeModal();
    }
  });
}
