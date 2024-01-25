export default function initaccordin() {
  const acordinList = document.querySelectorAll(".js-acordion dt");
  const activeclass = "ativo";

  function activeAcordin() {
    this.classList.toggle(activeclass);
    this.nextElementSibling.classList.toggle(activeclass);
  }

  if (acordinList.length) {
    acordinList[0].classList.add(activeclass);
    acordinList[0].nextElementSibling.classList.add(activeclass);

    acordinList.forEach((item) => { item.addEventListener("click", activeAcordin); });
  }
}
