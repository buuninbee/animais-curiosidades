export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal){
   this.botaoAbrir = document.querySelector(botaoAbrir);
   this.botaoFechar = document.querySelector(botaoFechar);
   this.containerModal = document.querySelector(containerModal);
   
   this.eventToggle = this.eventToggle.bind(this) 
   this.cliqueForaModal = this.cliqueForaModal.bind(this) 
  }

  // adicione os event aos elementos do modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggle(){
    this.toggleModal()
  }

  // fecha modal quando clicka do lado de fora

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addmodalEvents(){  
    this.botaoAbrir.addEventListener("click", this.eventToggle);
    this.botaoFechar.addEventListener("click", this.eventToggle);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init(){
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addmodalEvents()
    }
  }
  
}
