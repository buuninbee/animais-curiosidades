export default class Accordin {
  constructor(list){
   this.acordinList = document.querySelectorAll(list);
   this.activeclass = 'ativo'
  }
  
  toggleAccordion(item) {
    item.classList.toggle(this.activeclass);
    item.nextElementSibling.classList.toggle(this.activeclass);
  }

  activeAcordin(){
    this.acordinList.forEach((item) => { item.addEventListener("click", () => this.activeAcordin(item)); });
  }

  /// iniciar função
  init(){
    if (this.acordinList.length){
      this.toggleAccordion(this.acordinList[0])
      this.activeAcordin()
    }
  }
}
