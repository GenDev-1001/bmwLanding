const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu-list");

const openMenu = () => {
  menuList.classList.toggle("menu--open");
  menuBtn.classList.toggle("menu__btn--active");
  document.body.classList.toggle("no-scroll");
}

menuBtn.addEventListener('click', openMenu)