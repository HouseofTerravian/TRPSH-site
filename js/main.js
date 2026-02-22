/* ═══════════════════════════════════════════════
   TRPSH — The Right Path Starts Here
   Main JavaScript
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Nav: Scroll + Mobile ─── */
  const nav        = document.getElementById('nav');
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ─── Smooth scroll for all anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ─── Scroll Animations (IntersectionObserver) ─── */
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-animate]').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    animObserver.observe(el);
  });

  /* ─── Stats Counter ─── */
  const statNums = document.querySelectorAll('.stat-item__num[data-target]');
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      statsAnimated = true;
      statNums.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 1800;
        const start = performance.now();
        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const value = target * ease;
          el.textContent = isDecimal ? value.toFixed(1) : Math.floor(value).toString();
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = isDecimal ? target.toFixed(1) : target.toString();
        }
        requestAnimationFrame(tick);
      });
    }
  }

  window.addEventListener('scroll', animateStats, { passive: true });
  animateStats();

  /* ─── FAQ Accordion ─── */
  document.querySelectorAll('.faq-item__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-item__a');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.faq-item__q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.faq-item').querySelector('.faq-item__a').classList.remove('open');
      });

      // Open clicked if it wasn't open
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

  /* ─── Free Book Form ─── */
  const bookForm    = document.getElementById('bookForm');
  const bookSuccess = document.getElementById('bookFormSuccess');

  if (bookForm) {
    bookForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm(bookForm)) return;

      // Simulate submission
      const btn = bookForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        bookForm.style.display = 'none';
        bookSuccess.style.display = 'block';
      }, 1200);
    });
  }

  /* ─── Contact Form ─── */
  const contactForm    = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactFormSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm(contactForm)) return;

      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        contactForm.style.display = 'none';
        contactSuccess.style.display = 'block';
      }, 1200);
    });
  }

  /* ─── Form Validation ─── */
  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        field.classList.add('error');
        valid = false;
      }
    });
    if (!valid) {
      const firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
    }
    return valid;
  }

  // Clear error on input
  document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });

  /* ─── Active nav link highlight on scroll ─── */
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ─── Testimonial track: pause on focus for accessibility ─── */
  document.querySelectorAll('.testimonials__track').forEach(track => {
    track.querySelectorAll('.t-card').forEach(card => {
      card.setAttribute('tabindex', '0');
      card.addEventListener('focus', () => { track.style.animationPlayState = 'paused'; });
      card.addEventListener('blur',  () => { track.style.animationPlayState = 'running'; });
    });
  });

});
