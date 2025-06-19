// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  const toggleDesktop = document.getElementById('toggle-dark');
  const toggleMobile = document.getElementById('toggle-dark-mobile');
  const body = document.body;

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (toggleDesktop) toggleDesktop.checked = true;
    if (toggleMobile) toggleMobile.checked = true;
  }

  function setTheme(isDark) {
    if (isDark) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
    if (toggleDesktop) toggleDesktop.checked = isDark;
    if (toggleMobile) toggleMobile.checked = isDark;
  }

  if (toggleDesktop) {
    toggleDesktop.addEventListener('change', function () {
      setTheme(this.checked);
    });
  }
  if (toggleMobile) {
    toggleMobile.addEventListener('change', function () {
      setTheme(this.checked);
    });
  }

  // Hamburger menu close on link click
  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('.menu-links');
      const icon = document.querySelector('.hamburger-icon');
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.classList.remove('open');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    const hamburgerNav = document.getElementById('hamburger-nav');
    if (
      menu.classList.contains('open') &&
      !menu.contains(e.target) &&
      !icon.contains(e.target)
    ) {
      menu.classList.remove('open');
      icon.classList.remove('open');
    }
  });
});
