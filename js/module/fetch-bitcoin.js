export default function FetchBitcoin(url, target) {
  function converterBtc(bitcoin) {
    const div = document.querySelector(target);
    div.innerHTML = (1000 / bitcoin.BRL.buy).toFixed(4);
  }
  
  async function fetchapi() {
    const moeda = await fetch(url);
    const data = await moeda.json();

    converterBtc(data);
  }

  fetchapi();
}
