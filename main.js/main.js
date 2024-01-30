(()=>{"use strict";function t(t,e,i){const s=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{s.removeEventListener(t,o)})),i())}t.hasAttribute(n)||(e.forEach((t=>{s.addEventListener(t,o)})),t.setAttribute(n,""))}class e{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observeTarget=document.querySelector(e),this.observeclass=i}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const n=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>{this.incrementarNumero(t)}))}handleMutation(t){t[0].target.classList.contains(this.observeclass)&&(this.observer.disconnect(),this.animaNumeros())}addMutation(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observeTarget,{attributes:!0})}init(){return this.numeros&&this.observeTarget&&this.addMutation(),this}}(new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContext=document.querySelectorAll(e),this.classactive="ativo"}activeTab(t){this.tabContext.forEach((t=>{t.classList.remove(this.classactive)}));const e=this.tabContext[t].dataset.anime;this.tabContext[t].classList.add(this.classactive,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){this.tabMenu.length&&this.tabContext.length&&(this.activeTab(0),this.addTabNavEvent())}}).init(),new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrolltoSection=this.scrolltoSection.bind(this)}scrolltoSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrolltoSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="list"] a[href^="#"]').init(),new class{constructor(t){this.acordinList=document.querySelectorAll(t),this.activeclass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeclass),t.nextElementSibling.classList.toggle(this.activeclass)}activeAcordin(){this.acordinList.forEach((t=>{t.addEventListener("click",(()=>this.activeAcordin(t)))}))}init(){this.acordinList.length&&(this.toggleAccordion(this.acordinList[0]),this.activeAcordin())}}(".js-acordion dt").init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggle=this.eventToggle.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggle(){this.toggleModal()}cliqueForaModal(t){t.target===this.containerModal&&this.toggleModal()}addmodalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggle),this.botaoFechar.addEventListener("click",this.eventToggle),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addmodalEvents()}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),async function(){try{const t=await fetch("../../animaisapi.json");(await t.json()).forEach((t=>{(function(t){const e=document.querySelector(".numeros-grid"),i=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero >${t.quanty}</span>`,e}(t);e.appendChild(i)})(t),new e("[data-numero]",".numeros","ativo").init()}))}catch(t){console.log(t)}}(),async function(){const t=await fetch("https://blockchain.info/ticker");var e;e=await t.json(),document.querySelector(".btc-preco").innerHTML=(1e3/e.BRL.buy).toFixed(4)}(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=function(t,e){let i;return(...e)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...e),i=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.screenY>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}}('[data-anime="scroll"]').init(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((i=>{t.addEventListener(i,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"'),i=document.querySelector('[data-menu="list"'),s=["click","touchstart"];function n(n){i.classList.toggle("active"),e.classList.toggle("active"),n.StopPropagation(),t(i,s,(()=>{i.classList.remove("activve"),e.classList.remove("activve")}))}e&&s.forEach((t=>e.addEventListener(t,n)))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),i=t.dataset.horario.split(",").map(Number),s=new Date,n=s.getDay(),o=s.getHours(),a=-1!==e.indexOf(n),c=o>=i[0]&&o<i[1];a&&c&&t.classList.add("aberto")}()})();