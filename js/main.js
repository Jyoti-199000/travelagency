// ============================================================
// TravelVista - Main JavaScript
// Handles: Navbar, Hero Slider, Scroll effects, Home page rendering,
// Testimonials, Booking Modal, Counter animation
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== MOBILE NAVIGATION =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function closeMobileMenu() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  if (navbar && !navbar.classList.contains('scrolled')) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ===== BACK TO TOP =====
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== SCROLL REVEAL =====
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Expose globally for dynamically added elements
  window.revealObserver = revealObserver;

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // ===== HERO SLIDER (Home page only) =====
  const heroSlider = document.getElementById('heroSlider');
  const heroDots = document.getElementById('heroDots');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');

  if (heroSlider && HERO_SLIDES) {
    let currentSlide = 0;

    // Create slides
    HERO_SLIDES.forEach((slide, i) => {
      const slideEl = document.createElement('div');
      slideEl.className = `hero-slide ${i === 0 ? 'active' : ''}`;
      slideEl.innerHTML = `<img src="${slide.image}" alt="${slide.title}" loading="${i === 0 ? 'eager' : 'lazy'}">`;
      heroSlider.appendChild(slideEl);
    });

    // Create dots
    if (heroDots) {
      HERO_SLIDES.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `hero-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        heroDots.appendChild(dot);
      });
    }

    function goToSlide(index) {
      const slides = heroSlider.querySelectorAll('.hero-slide');
      const dots = heroDots ? heroDots.querySelectorAll('.hero-dot') : [];

      slides[currentSlide].classList.remove('active');
      if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

      currentSlide = index;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');

      if (heroTitle) heroTitle.textContent = HERO_SLIDES[currentSlide].title;
      if (heroSubtitle) heroSubtitle.textContent = HERO_SLIDES[currentSlide].subtitle;
    }

    // Auto-slide
    setInterval(() => {
      goToSlide((currentSlide + 1) % HERO_SLIDES.length);
    }, 5000);
  }

  // ===== SEARCH TABS =====
  const searchTabs = document.querySelectorAll('.search-tab');
  searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      searchTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ===== HERO SEARCH =====
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const query = document.getElementById('heroSearch').value.trim();
      if (query) {
        window.location.href = `packages.html?search=${encodeURIComponent(query)}`;
      } else {
        window.location.href = 'packages.html';
      }
    });

    // Enter key support
    const heroSearchInput = document.getElementById('heroSearch');
    if (heroSearchInput) {
      heroSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') heroSearchBtn.click();
      });
    }
  }

  // ===== HOME PAGE: POPULAR DESTINATIONS =====
  const homeDestGrid = document.getElementById('homeDestinationsGrid');
  if (homeDestGrid) {
    setTimeout(() => {
      const popular = DESTINATIONS.slice(0, 8);
      homeDestGrid.innerHTML = popular.map(dest => createDestinationCard(dest)).join('');
      // Observe new reveals
      homeDestGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }, 800); // Simulated loading
  }

  // ===== HOME PAGE: FEATURED PACKAGES =====
  const homePackGrid = document.getElementById('homePackagesGrid');
  if (homePackGrid) {
    setTimeout(() => {
      const featured = PACKAGES.slice(0, 6);
      homePackGrid.innerHTML = featured.map(pkg => createPackageCard(pkg)).join('');
      homePackGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
      attachBookingListeners();
    }, 1000);
  }

  // ===== TESTIMONIALS SLIDER =====
  const testimonialsTrack = document.getElementById('testimonialsTrack');
  const testimonialDots = document.getElementById('testimonialDots');
  const testimonialPrev = document.getElementById('testimonialPrev');
  const testimonialNext = document.getElementById('testimonialNext');

  if (testimonialsTrack && TESTIMONIALS) {
    let currentTestimonial = 0;

    // Build testimonials
    testimonialsTrack.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-content">
          <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
          <div class="stars">${generateStars(t.rating)}</div>
          <p class="text">"${t.text}"</p>
          <div class="testimonial-author">
            <img src="${t.avatar}" alt="${t.name}" loading="lazy">
            <div class="author-info">
              <h4>${t.name}</h4>
              <p>${t.location} · ${t.trip}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Build dots
    if (testimonialDots) {
      TESTIMONIALS.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToTestimonial(i));
        testimonialDots.appendChild(dot);
      });
    }

    function goToTestimonial(index) {
      currentTestimonial = index;
      testimonialsTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
      if (testimonialDots) {
        testimonialDots.querySelectorAll('.dot').forEach((d, i) => {
          d.classList.toggle('active', i === currentTestimonial);
        });
      }
    }

    if (testimonialPrev) {
      testimonialPrev.addEventListener('click', () => {
        goToTestimonial(currentTestimonial === 0 ? TESTIMONIALS.length - 1 : currentTestimonial - 1);
      });
    }

    if (testimonialNext) {
      testimonialNext.addEventListener('click', () => {
        goToTestimonial((currentTestimonial + 1) % TESTIMONIALS.length);
      });
    }

    // Auto-slide testimonials
    setInterval(() => {
      goToTestimonial((currentTestimonial + 1) % TESTIMONIALS.length);
    }, 6000);
  }

  // ===== COUNTER ANIMATION =====
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (statNumbers.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * target);

      if (target >= 1000) {
        el.textContent = current.toLocaleString('en-IN') + '+';
      } else {
        el.textContent = current + '+';
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ===== BOOKING MODAL =====
  window.openBookingModal = function(packageId) {
    const pkg = PACKAGES.find(p => p.id === packageId);
    if (!pkg) return;

    const modal = document.getElementById('bookingModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
      <div class="booking-summary">
        <img src="${pkg.image}" alt="${pkg.title}">
        <div class="summary-info">
          <h4>${pkg.title}</h4>
          <p><i class="fas fa-map-marker-alt"></i> ${pkg.destination}</p>
          <p><i class="fas fa-clock"></i> ${pkg.duration}</p>
          <div class="price">${formatPrice(pkg.price)} <span style="font-size:0.8rem;color:var(--text-muted);font-weight:400;">/person</span></div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Travel Date</label>
          <input type="date" id="bookingDate">
        </div>
        <div class="form-group">
          <label>No. of Travelers</label>
          <select id="bookingTravelers" style="width:100%;padding:14px 16px;border:2px solid var(--border);border-radius:var(--radius-sm);font-size:0.95rem;background:var(--bg);">
            <option value="1">1 Person</option>
            <option value="2" selected>2 Persons</option>
            <option value="3">3 Persons</option>
            <option value="4">4 Persons</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="bookingName" placeholder="Enter your name">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" id="bookingEmail" placeholder="Enter your email">
      </div>
      <div style="background:var(--primary-light);padding:16px;border-radius:var(--radius-sm);margin-top:8px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
          <span style="color:var(--text-secondary);">Package Price</span>
          <span style="font-weight:600;">${formatPrice(pkg.price)} × <span id="travelerCount">2</span></span>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid var(--border);">
          <span style="font-weight:700;font-size:1.1rem;">Total</span>
          <span style="font-weight:800;font-size:1.2rem;color:var(--primary);" id="totalPrice">${formatPrice(pkg.price * 2)}</span>
        </div>
      </div>
    `;

    // Update total on traveler change
    const travelerSelect = document.getElementById('bookingTravelers');
    const travelerCountEl = document.getElementById('travelerCount');
    const totalPriceEl = document.getElementById('totalPrice');

    if (travelerSelect) {
      travelerSelect.addEventListener('change', () => {
        const count = parseInt(travelerSelect.value);
        travelerCountEl.textContent = count;
        totalPriceEl.textContent = formatPrice(pkg.price * count);
      });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Modal close handlers
  const modalClose = document.getElementById('modalClose');
  const modalCancel = document.getElementById('modalCancel');
  const modalConfirm = document.getElementById('modalConfirm');
  const bookingModal = document.getElementById('bookingModal');

  function closeModal() {
    if (bookingModal) {
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCancel) modalCancel.addEventListener('click', closeModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  if (modalConfirm) {
    modalConfirm.addEventListener('click', () => {
      const name = document.getElementById('bookingName');
      const email = document.getElementById('bookingEmail');
      const date = document.getElementById('bookingDate');

      if (!name || !name.value.trim()) {
        alert('Please enter your name.');
        return;
      }
      if (!email || !email.value.trim() || !email.value.includes('@')) {
        alert('Please enter a valid email.');
        return;
      }
      if (!date || !date.value) {
        alert('Please select a travel date.');
        return;
      }

      // Show success
      closeModal();
      showToast('🎉 Booking confirmed! Check your email for details.');
    });
  }

  // ===== TOAST NOTIFICATION =====
  window.showToast = function(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #1a1a2e;
      color: white;
      padding: 16px 28px;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 500;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      z-index: 100000;
      opacity: 0;
      transition: all 0.4s ease;
      max-width: 90%;
      text-align: center;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  };

}); // end DOMContentLoaded


// ===== CARD GENERATORS (used by multiple pages) =====

function createDestinationCard(dest) {
  return `
    <div class="destination-card reveal">
      <div class="card-image">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <span class="card-badge">${dest.category === 'beach' ? '🏖 Beach' : dest.category === 'mountain' ? '🏔 Mountain' : '🏙 City'}</span>
        <span class="card-rating"><i class="fas fa-star"></i> ${dest.rating}</span>
      </div>
      <div class="card-body">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <div class="card-footer">
          <div class="card-price">
            <span class="from">Starting from</span>
            <span class="amount">${formatPrice(dest.startingPrice)}</span>
          </div>
          <a href="packages.html?search=${encodeURIComponent(dest.name.split(',')[0])}" class="btn btn-primary btn-sm">
            Explore <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

function createPackageCard(pkg) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
  return `
    <div class="package-card reveal">
      <div class="card-image">
        <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
        <span class="discount-badge">${discount}% OFF</span>
        <span class="card-rating"><i class="fas fa-star"></i> ${pkg.rating}</span>
      </div>
      <div class="card-body">
        <h3>${pkg.title}</h3>
        <div class="package-meta">
          <span><i class="fas fa-map-marker-alt"></i> ${pkg.destination}</span>
          <span><i class="fas fa-clock"></i> ${pkg.duration}</span>
          <span><i class="fas fa-star"></i> ${pkg.rating} (${pkg.reviews})</span>
        </div>
        <div class="package-highlights">
          ${pkg.highlights.map(h => `<span>${h}</span>`).join('')}
        </div>
        <div class="package-pricing">
          <span class="current-price">${formatPrice(pkg.price)}</span>
          <span class="original-price">${formatPrice(pkg.originalPrice)}</span>
          <span class="per-person">/person</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-outline btn-sm" onclick="openBookingModal(${pkg.id})">
          <i class="fas fa-eye"></i> Preview
        </button>
        <button class="btn btn-primary btn-sm book-now-btn" data-id="${pkg.id}">
          <i class="fas fa-bolt"></i> Book Now
        </button>
      </div>
    </div>
  `;
}

function attachBookingListeners() {
  document.querySelectorAll('.book-now-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      openBookingModal(id);
    });
  });
}
