export default function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContext = document.querySelectorAll(".js-tabcontent section");

  function activeTab(index) {
    tabContext.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabContext[index].dataset.anime;
    tabContext[index].classList.add("ativo", direcao);
  }
  
  if (tabMenu.length && tabContext.length) {
    tabContext[0].classList.add("ativo");

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
