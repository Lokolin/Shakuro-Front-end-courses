let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let head = document.getElementById('header-js');
let navLi = document.getElementById('nav-li');
let logo = document.getElementById('logo');

window.onload = function() {
  navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    head.classList.toggle('white-header-mobile');
    navLi.classList.toggle('mobile-nav');
    logo.classList.toggle('hide-element');
  });
};
