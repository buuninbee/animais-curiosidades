export default class AnimacaoScroll {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animeScroll = this.animeScroll.bind(this)
  }

  animeScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init(){
    this.animeScroll()
    window.addEventListener("scroll", this.animeScroll);   
  }
}
