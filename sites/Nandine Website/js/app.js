const menuIcon = document.querySelector('.menu-toggle');
const sideNav = document.querySelector('.side-nav');
const btnCloseNav = document.querySelector('.close-nav');
const body = document.querySelector('body');
const navBar = document.querySelector('header');
const overlay = document.querySelector('.overlay');
function showOverlay() {
  overlay.style.display = 'block';
}
function hideOverlay() {
  overlay.style.display = 'none';
}
function showSideNav(){
  sideNav.classList.add('active');
  body.style.overflow = 'hidden';
  showOverlay();
}
function closeSideNav() {
  sideNav.classList.remove('active');
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

const linksInternos = document.querySelectorAll('.scroll');
function scrollToSection(event){
	event.preventDefault();
	const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const sectionPosition = section.getBoundingClientRect().top;
  console.log(sectionPosition);
	window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
  });
}
linksInternos.forEach((link) => {
	link.addEventListener('click', scrollToSection);
});

