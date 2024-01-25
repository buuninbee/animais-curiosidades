export default function initFetchBitcoin() {
  const apiPuxa = "https://blockchain.info/ticker";

  function converterBtc(data) {
    const div = document.querySelector(".btc-preco");
    div.innerHTML = (1000 / data.BRL.buy).toFixed(4);
  }
  
  async function fetchapi() {
    const moeda = await fetch(apiPuxa);
    const data = await moeda.json();

    converterBtc(data);
  }

  fetchapi();
}
