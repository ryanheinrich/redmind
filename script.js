document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Placeholder — replace with real form handling / API call
      alert('Thank you. Your message has been received. We will respond shortly.');
      form.reset();
    });
  }
});
