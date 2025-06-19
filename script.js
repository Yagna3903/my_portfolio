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

  // Typewriter loop effect
  const text = "Yagna Patel";
  const el = document.getElementById("typewriter-title");
  let i = 0;
  let isDeleting = false;
  let speed = 180;

  function typeLoop() {
    // Always show caret after the last character
    let displayText = '';
    if (!isDeleting) {
      displayText = text.substring(0, i + 1);
      i++;
      if (i === text.length) {
        isDeleting = true;
        el.innerHTML = displayText + '<span class="caret"></span>';
        setTimeout(typeLoop, 3000); // Pause at end
        return;
      }
    } else {
      displayText = i > 0 ? text.substring(0, i - 1) : "\u00A0";
      i--;
      if (i === 0) {
        isDeleting = false;
        el.innerHTML = displayText + '<span class="caret"></span>';
        setTimeout(typeLoop, 500); // Pause at start
        return;
      }
    }
    el.innerHTML = displayText + '<span class="caret"></span>';
    setTimeout(typeLoop, isDeleting ? 100 : speed);
  }
  typeLoop();
});