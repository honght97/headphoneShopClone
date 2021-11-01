const header = document.querySelector('.header');
const navItems = document.querySelectorAll('.nav__menu__list__item');
const submenuItems = document.querySelectorAll('.submenu__item');
const hamburger = document.querySelector(".hamburger");
const mbMenu = document.querySelector(".nav__menu--mobile");
window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    
    if(offset > 90)
    header.classList.add('scroll')
    else 
    header.classList.remove('scroll')
});
navItems.forEach((tab, index) => {
  const subItem = submenuItems[index];
  tab.onclick = function() {
      // document.querySelector(".submenu__item.active").classList.remove("active");
      // subItem.classList.add('active');
      subItem.classList.toggle('active');
  }
})
hamburger.onclick = () => {
  hamburger.classList.toggle("is-active");
  mbMenu.classList.toggle('active');
}