export default class TabNav {
  constructor(links, conteiner) {
    this.tabMenu = document.querySelectorAll(links);
    this.tabContext = document.querySelectorAll(conteiner);
    this.classactive = "ativo"
  }

  activeTab(index) {
    this.tabContext.forEach((section) => {
      section.classList.remove(this.classactive);
    });
    const direcao = this.tabContext[index].dataset.anime;
    this.tabContext[index].classList.add(this.classactive, direcao);
  }

  addTabNavEvent(){
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {this.activeTab(index)});
    });
  }
  
  init(){
    if (this.tabMenu.length && this.tabContext.length) {
      this.activeTab(0)
      this.addTabNavEvent()
    }
  }
}