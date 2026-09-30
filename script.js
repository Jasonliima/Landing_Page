const menuButton = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});
