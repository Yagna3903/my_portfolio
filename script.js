// Hamburger Menu Toggle
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }
  
  // Dark Mode Toggle
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle-dark');
    const body = document.body;
  
    // Load theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      toggle.checked = true;
    }
  
    toggle.addEventListener('change', function () {
      if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  });
