// ============================================================
// TravelVista - Contact Page Logic
// Handles: Form validation & success message
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

    let isValid = true;

    // Validate name
    const name = document.getElementById('contactName');
    if (!name.value.trim()) {
      name.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate email
    const email = document.getElementById('contactEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      email.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate message
    const message = document.getElementById('contactMessage');
    if (!message.value.trim()) {
      message.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      form.style.display = 'none';
      formSuccess.style.display = 'block';

      // Show toast
      if (window.showToast) {
        showToast('✅ Message sent successfully! We\'ll reply within 24 hours.');
      }
    }, 1500);
  });

  // Clear errors on input
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.closest('.form-group').classList.remove('has-error');
    });
  });
});
