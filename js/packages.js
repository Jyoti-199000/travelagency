// ============================================================
// TravelVista - Packages Page Logic
// Handles: Search, Price/Duration/Sort Filters, Booking Modal
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('packagesGrid');
  const searchInput = document.getElementById('pkgSearch');
  const priceSelect = document.getElementById('pkgPrice');
  const durationSelect = document.getElementById('pkgDuration');
  const sortSelect = document.getElementById('pkgSort');
  const noResults = document.getElementById('pkgNoResults');
  const resultsCount = document.getElementById('pkgResultsCount');

  if (!grid) return;

  let currentSearch = '';
  let currentPrice = 'all';
  let currentDuration = 'all';
  let currentSort = 'popular';

  // Check for URL params (from hero search or destination links)
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');
  if (searchParam && searchInput) {
    searchInput.value = searchParam;
    currentSearch = searchParam.toLowerCase();
  }

  function filterAndRender() {
    let filtered = PACKAGES.filter(pkg => {
      // Search match
      const matchesSearch = currentSearch === '' ||
        pkg.title.toLowerCase().includes(currentSearch) ||
        pkg.destination.toLowerCase().includes(currentSearch) ||
        pkg.highlights.some(h => h.toLowerCase().includes(currentSearch));

      // Price match
      let matchesPrice = true;
      if (currentPrice !== 'all') {
        const [min, max] = currentPrice.split('-').map(Number);
        matchesPrice = pkg.price >= min && pkg.price <= max;
      }

      // Duration match
      let matchesDuration = true;
      if (currentDuration !== 'all') {
        const [min, max] = currentDuration.split('-').map(Number);
        matchesDuration = pkg.durationDays >= min && pkg.durationDays <= max;
      }

      return matchesSearch && matchesPrice && matchesDuration;
    });

    // Sort
    switch (currentSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    // Update results count
    if (resultsCount) {
      resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${PACKAGES.length}</strong> packages`;
    }

    // Render
    if (filtered.length === 0) {
      grid.innerHTML = '';
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
      grid.innerHTML = filtered.map(pkg => createPackageCard(pkg)).join('');

      // Re-observe reveals
      grid.querySelectorAll('.reveal').forEach(el => {
        if (window.revealObserver) window.revealObserver.observe(el);
      });

      // Attach booking listeners
      attachBookingListeners();
    }
  }

  // Event listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      filterAndRender();
    });
  }

  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      currentPrice = e.target.value;
      filterAndRender();
    });
  }

  if (durationSelect) {
    durationSelect.addEventListener('change', (e) => {
      currentDuration = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
});
