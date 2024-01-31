import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton,menuList, events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if(events === undefined) this.events = ["click", "touchstart"];
    else this.eventos = events

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {
    this.menuList.classList.add("active");
    this.menuButton.classList.add("active");

    if( this.menuList.classList.contains("active") && this.menuButton.classList.contains("active")){
      this.menuList.style.display = "flex"
    }else{
      this.menuList.classList.remove("activve");
      this.menuList.style.display = "none"
       outsideClick(this.menuList, this.events, () => {
         this.menuList.classList.remove("activve");
         this.menuList.style.display = "none"
         this.menuButton.classList.remove("activve");
       });
    }
  }

  addEventsmenumobile() {
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init(){
    if(this.menuButton && this.menuList){
      this.addEventsmenumobile()
    }

  }
}