let selectHeader = document.querySelectorAll('.header__burger');
// let selectNav = document.querySelector('.nav__list');


selectHeader.forEach(item => {
  item.addEventListener('click', selectToggle)
});


function selectToggle() {
  this.classList.toggle('active');
  // selectNav.classList.toggle('active');
}
