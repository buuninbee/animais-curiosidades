import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');
  const eventos = ["click", "touchstart"];

  function openMenu(e) {
    menuList.classList.toggle("active");
    menuButton.classList.toggle("active");
    e.StopPropagation();
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("activve");
      menuButton.classList.remove("activve");
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}