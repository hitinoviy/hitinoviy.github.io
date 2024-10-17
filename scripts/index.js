let nav = document.querySelector('.menu');
let navLinks = nav.querySelectorAll('.menu__link');

window.addEventListener('hashchange', (e) => {
  toggleMenuActiveClass(e.newURL);
});

const toggleMenuActiveClass = (url) => {
  navLinks.forEach((item) => {
    item.classList.remove('active');
    if (item.href === url) {
      item.classList.add('active');
    }
  });
};

document.querySelector('.box').style.background = 'red';
