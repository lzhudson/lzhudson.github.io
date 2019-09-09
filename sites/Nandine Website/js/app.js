const menuIcon = document.querySelector('.menu-toggle');
const sideNav = document.querySelector('.side-nav');
const btnCloseNav = document.querySelector('.close-nav');
const body = document.querySelector('body');
const scrollLinks = document.querySelectorAll('.scroll');
const navBar = document.querySelector('header');
const overlay = document.querySelector('.overlay');
function showOverlay() {
  overlay.style.display = 'block';
}
function hideOverlay() {
  overlay.style.display = 'none';
}
function showSideNav(){
  sideNav.classList.toggle('active');
  body.style.overflow = 'hidden';
  showOverlay();
}
function closeSideNav() {
  sideNav.classList.toggle('active');
  body.style.overflow = '';
  hideOverlay();
}
function scrollToSection() {
  scrollLinks.forEach(element =>{
    console.log(this.getAttributte('href'));
  })
}
function stickyNavBar() {
  if(window.scrollY > 125) {
    navBar.style.opacity = '0.9';
  } else {
    navBar.style.opacity = '1';
  }
}
menuIcon.addEventListener('click', showSideNav);
btnCloseNav.addEventListener('click', closeSideNav);
document.addEventListener('scroll', stickyNavBar);

