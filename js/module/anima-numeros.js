export default class AnimaNumeros {
  constructor(numeros, observeTarget, observeclass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget)
    this.observeclass = observeclass
  }

  static incrementarNumero(numero){
    const total = +numero.innerText;

    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start  += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => { this.incrementarNumero(numero) });
  }


  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observeclass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutation(){
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init(){
    if(this.numeros && this.observeTarget){
      this.addMutation()
    }
    return this
  }
}