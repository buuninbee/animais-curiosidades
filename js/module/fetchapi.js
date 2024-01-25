import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchapi() {

  function animais(data) {
    const div = document.querySelector(".numeros-grid");
    data.forEach((animal) => {
      const newdiv = document.createElement("div");
      newdiv.innerHTML = `<h3>${animal.specie}</h3><span data-numero >${animal.quanty}</span>`;
      div.appendChild(newdiv);
    });
  }
  
  async function fetchapi() {
    const url = "./animaisapi.json";

    const dados = await fetch(url);
    const data = await dados.json();
    animais(data);
  }
  fetchapi();

  initAnimaNumeros();
}
