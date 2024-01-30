import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenu, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenu);
    this.activeClass = 'active'
    if( events === undefined){

      this.events = ["touchstart", "click"]
    } else{
      this.events = events
    }

    this.activeDropdown = this.activeDropdown.bind(this)
  }

  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass );
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addDropdownMenuEvent(){
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });  
  }

  init(){
    if(this.dropdownMenu.length){
      this.addDropdownMenuEvent()
    }
    return this
  }
}
