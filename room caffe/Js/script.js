feather.replace();

const navbarNav = document.querySelector('.navbar__nav');
const hamburger = document.querySelector('#hamburger-menu');

function toggleNavbar() {
  navbarNav.classList.toggle('navbar__nav--active');
  if (navbarNav.classList.contains('navbar__nav--active')) {
    navbarNav.style.right = '0';
  } else {
    navbarNav.style.right = '-100%';
  }
}

if (hamburger && window.getComputedStyle(hamburger).display !== "none") {
  hamburger.onclick = (e) => {
    e.preventDefault(); // cegah reload
    toggleNavbar();
  };

  document.addEventListener('click', function (e) {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
      navbarNav.classList.remove('navbar__nav--active');
      navbarNav.style.right = '-100%';
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    navbarNav.style.right = '-100%';
    navbarNav.classList.remove('navbar__nav--active');
  }
});

const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.body.offsetHeight;

  if (scrollPosition >= pageHeight - 200) {
    footer.classList.add("footer--show");
  } else {
    footer.classList.remove("footer--show");
  }
});
