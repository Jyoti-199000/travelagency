// ============================================================
// TravelVista - Destinations Page Logic
// Handles: Search, Category Filter, Region Filter
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('destinationsGrid');
  const searchInput = document.getElementById('destSearch');
  const regionSelect = document.getElementById('destRegion');
  const categoryBtns = document.querySelectorAll('.filter-tag[data-category]');
  const noResults = document.getElementById('destNoResults');
  const resultsCount = document.getElementById('destResultsCount');

  if (!grid) return;

  let currentCategory = 'all';
  let currentRegion = 'all';
  let currentSearch = '';

  // Check for URL params (from hero search)
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');
  if (searchParam && searchInput) {
    searchInput.value = searchParam;
    currentSearch = searchParam.toLowerCase();
  }

  function filterAndRender() {
    let filtered = DESTINATIONS.filter(dest => {
      const matchesCategory = currentCategory === 'all' || dest.category === currentCategory;
      const matchesRegion = currentRegion === 'all' || dest.region === currentRegion;
      const matchesSearch = currentSearch === '' ||
        dest.name.toLowerCase().includes(currentSearch) ||
        dest.description.toLowerCase().includes(currentSearch) ||
        dest.category.toLowerCase().includes(currentSearch);

      return matchesCategory && matchesRegion && matchesSearch;
    });

    // Update results count
    if (resultsCount) {
      resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${DESTINATIONS.length}</strong> destinations`;
    }

    // Show/hide no results
    if (filtered.length === 0) {
      grid.innerHTML = '';
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
      grid.innerHTML = filtered.map(dest => createDestinationCard(dest)).join('');

      // Re-observe reveals
      grid.querySelectorAll('.reveal').forEach(el => {
        if (window.revealObserver) window.revealObserver.observe(el);
      });
    }
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      filterAndRender();
    });
  }

  // Category filter tags
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      filterAndRender();
    });
  });

  // Region select
  if (regionSelect) {
    regionSelect.addEventListener('change', (e) => {
      currentRegion = e.target.value;
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
});
