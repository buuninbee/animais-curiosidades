/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/accordin.js":
/*!*******************************!*\
  !*** ./js/module/accordin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initaccordin)\n/* harmony export */ });\nfunction initaccordin() {\n  const acordinList = document.querySelectorAll(\".js-acordion dt\");\n  const activeclass = \"ativo\";\n\n  function activeAcordin() {\n    this.classList.toggle(activeclass);\n    this.nextElementSibling.classList.toggle(activeclass);\n  }\n\n  if (acordinList.length) {\n    acordinList[0].classList.add(activeclass);\n    acordinList[0].nextElementSibling.classList.add(activeclass);\n\n    acordinList.forEach((item) => { item.addEventListener(\"click\", activeAcordin); });\n  }\n}\n\n\n//# sourceURL=webpack://animais/./js/module/accordin.js?");

/***/ }),

/***/ "./js/module/anima-numeros.js":
/*!************************************!*\
  !*** ./js/module/anima-numeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll(\"[data-numero]\");\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n      const timer = setInterval(() => {\n        start  += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observer\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n\n  const observeTarget = document.querySelector(\".numeros\");\n  observer = new MutationObserver(handleMutation);\n  observer.observe(observeTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais/./js/module/anima-numeros.js?");

/***/ }),

/***/ "./js/module/dropdown.js":
/*!*******************************!*\
  !*** ./js/module/dropdown.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/module/outsideclick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenu = document.querySelectorAll(\"[data-dropdown]\");\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add(\"active\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], () => {\n      this.classList.remove(\"active\");\n    });\n  }\n\n  dropdownMenu.forEach((menu) => {\n    [\"touchstart\", \"click\"].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });  \n}\n\n\n//# sourceURL=webpack://animais/./js/module/dropdown.js?");

/***/ }),

/***/ "./js/module/fetch-bitcoin.js":
/*!************************************!*\
  !*** ./js/module/fetch-bitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  const apiPuxa = \"https://blockchain.info/ticker\";\n\n  function converterBtc(data) {\n    const div = document.querySelector(\".btc-preco\");\n    div.innerHTML = (1000 / data.BRL.buy).toFixed(4);\n  }\n  \n  async function fetchapi() {\n    const moeda = await fetch(apiPuxa);\n    const data = await moeda.json();\n\n    converterBtc(data);\n  }\n\n  fetchapi();\n}\n\n\n//# sourceURL=webpack://animais/./js/module/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/module/fetchapi.js":
/*!*******************************!*\
  !*** ./js/module/fetchapi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchapi)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/module/anima-numeros.js\");\n\n\nfunction initFetchapi() {\n\n  function animais(data) {\n    const div = document.querySelector(\".numeros-grid\");\n    data.forEach((animal) => {\n      const newdiv = document.createElement(\"div\");\n      newdiv.innerHTML = `<h3>${animal.specie}</h3><span data-numero >${animal.quanty}</span>`;\n      div.appendChild(newdiv);\n    });\n  }\n  \n  async function fetchapi() {\n    const url = \"./animaisapi.json\";\n\n    const dados = await fetch(url);\n    const data = await dados.json();\n    animais(data);\n  }\n  fetchapi();\n\n  (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://animais/./js/module/fetchapi.js?");

/***/ }),

/***/ "./js/module/funcionamento.js":
/*!************************************!*\
  !*** ./js/module/funcionamento.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diaSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberta = diaSemana.indexOf(diaAgora) !== -1;\n\n  const horarioAberto =\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (semanaAberta && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n\n//# sourceURL=webpack://animais/./js/module/funcionamento.js?");

/***/ }),

/***/ "./js/module/menu-mobile.js":
/*!**********************************!*\
  !*** ./js/module/menu-mobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/module/outsideclick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"');\n  const menuList = document.querySelector('[data-menu=\"list\"');\n  const eventos = [\"click\", \"touchstart\"];\n\n  function openMenu(e) {\n    menuList.classList.toggle(\"active\");\n    menuButton.classList.toggle(\"active\");\n    e.StopPropagation();\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove(\"activve\");\n      menuButton.classList.remove(\"activve\");\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n  }\n}\n\n//# sourceURL=webpack://animais/./js/module/menu-mobile.js?");

/***/ }),

/***/ "./js/module/modal.js":
/*!****************************!*\
  !*** ./js/module/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle(\"ativo\");\n  }\n\n  function cliqueForaModal(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  \n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoFechar.addEventListener(\"click\", toggleModal);\n    botaoAbrir.addEventListener(\"click\", toggleModal);\n    containerModal.addEventListener(\"click\", cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://animais/./js/module/modal.js?");

/***/ }),

/***/ "./js/module/outsideclick.js":
/*!***********************************!*\
  !*** ./js/module/outsideclick.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      html.addEventListener(userEvent, handleOutsideClick);\n    });\n    element.setAttribute(outside, \"\");\n  }\n}\n\n\n//# sourceURL=webpack://animais/./js/module/outsideclick.js?");

/***/ }),

/***/ "./js/module/scroll-animacao.js":
/*!**************************************!*\
  !*** ./js/module/scroll-animacao.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n\n  const windowMetade = window.innerHeight * 0.6;\n\n  function animeScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) {\n        section.classList.add(\"ativo\");\n      } else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n\n  if (sections.length) {\n    animeScroll();\n\n    window.addEventListener(\"scroll\", animeScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animais/./js/module/scroll-animacao.js?");

/***/ }),

/***/ "./js/module/scroll-suave.js":
/*!***********************************!*\
  !*** ./js/module/scroll-suave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options){\n    this.linksInternos = document.querySelectorAll(links)\n    if(options === undefined){\n      this.options = {behavior: 'smooth', block: 'start'}\n    }else{\n      this.options = options\n    }\n\n    this.scrolltoSection = this.scrolltoSection.bind(this)\n  }\n\n  scrolltoSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options)\n  }\n\n  addLinkEvent(){\n    this.linksInternos.forEach((link) => {\n      link.addEventListener(\"click\", this.scrolltoSection);\n    });\n  }\n  \n  init(){\n    if(this.linksInternos.length){\n      this.addLinkEvent()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animais/./js/module/scroll-suave.js?");

/***/ }),

/***/ "./js/module/tabnav.js":
/*!*****************************!*\
  !*** ./js/module/tabnav.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(links, conteiner) {\n    this.tabMenu = document.querySelectorAll(links);\n    this.tabContext = document.querySelectorAll(conteiner);\n    this.classactive = \"ativo\"\n  }\n\n  activeTab(index) {\n    this.tabContext.forEach((section) => {\n      section.classList.remove(this.classactive);\n    });\n    const direcao = this.tabContext[index].dataset.anime;\n    this.tabContext[index].classList.add(this.classactive, direcao);\n  }\n\n  addTabNavEvent(){\n    this.tabMenu.forEach((item, index) => {\n      item.addEventListener(\"click\", () => {this.activeTab(index)});\n    });\n  }\n  \n  init(){\n    if (this.tabMenu.length && this.tabContext.length) {\n      this.activeTab(0)\n      this.addTabNavEvent()\n    }\n  }\n}\n\n//# sourceURL=webpack://animais/./js/module/tabnav.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/scroll-suave.js */ \"./js/module/scroll-suave.js\");\n/* harmony import */ var _module_accordin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/accordin.js */ \"./js/module/accordin.js\");\n/* harmony import */ var _module_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/tabnav.js */ \"./js/module/tabnav.js\");\n/* harmony import */ var _module_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/scroll-animacao.js */ \"./js/module/scroll-animacao.js\");\n/* harmony import */ var _module_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/modal.js */ \"./js/module/modal.js\");\n/* harmony import */ var _module_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/dropdown.js */ \"./js/module/dropdown.js\");\n/* harmony import */ var _module_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/menu-mobile.js */ \"./js/module/menu-mobile.js\");\n/* harmony import */ var _module_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/funcionamento.js */ \"./js/module/funcionamento.js\");\n/* harmony import */ var _module_fetchapi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/fetchapi.js */ \"./js/module/fetchapi.js\");\n/* harmony import */ var _module_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/fetch-bitcoin.js */ \"./js/module/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst tab = new _module_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\ntab.init()\n\nconst scrollsuave = new _module_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"list\"] a[href^=\"#\"]');\nscrollsuave.init()\n\n;(0,_module_accordin_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_module_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_module_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_module_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_module_fetchapi_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_module_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n\n//# sourceURL=webpack://animais/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
(()=>{"use strict";function t(t,e,n){const o=document.documentElement,i="data-outside";function c(s){t.contains(s.target)||(t.removeAttribute(i),e.forEach((t=>{o.removeEventListener(t,c)})),n())}t.hasAttribute(i)||(e.forEach((t=>{o.addEventListener(t,c)})),t.setAttribute(i,""))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrolltoSection=this.scrolltoSection.bind(this)}scrolltoSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrolltoSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave" a[href^="#"').init(),new class{constructor(t){this.acordinList=document.querySelectorAll(t),this.activeclass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeclass),t.nextElementSibling.classList.toggle(this.activeclass)}activeAcordin(){this.acordinList.forEach((t=>{t.addEventListener("click",this.activeAcordin(t))}))}init(){this.acordinList.length&&(this.toggleAccordion(this.acordinList[0]),this.activeAcordin())}}(".js-acordion dt").init(),function(){const t=document.querySelectorAll(".js-tabmenu li"),e=document.querySelectorAll(".js-tabcontent section");t.length&&e.length&&(e[0].classList.add("ativo"),t.forEach(((t,n)=>{t.addEventListener("click",(()=>{!function(t){e.forEach((t=>{t.classList.remove("ativo")}));const n=e[t].dataset.anime;e[t].classList.add("ativo",n)}(n)}))})))}(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("ativo")}t&&e&&n&&(e.addEventListener("click",o),t.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)})))}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((n=>{t.addEventListener(n,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"'),n=document.querySelector('[data-menu="list"'),o=["click","touchstart"];function i(i){n.classList.toggle("active"),e.classList.toggle("active"),i.StopPropagation(),t(n,o,(()=>{n.classList.remove("activve"),e.classList.remove("activve")}))}e&&o.forEach((t=>e.addEventListener(t,i)))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,i=o.getDay(),c=o.getHours(),s=-1!==e.indexOf(i),a=c>=n[0]&&c<n[1];s&&a&&t.classList.add("aberto")}(),async function(){const t=await fetch("./animaisapi.json");!function(t){const e=document.querySelector(".numeros-grid");t.forEach((t=>{const n=document.createElement("div");n.innerHTML=`<h3>${t.specie}</h3><span data-numero >${t.quanty}</span>`,e.appendChild(n)}))}(await t.json())}(),function(){let t;const e=document.querySelector(".numeros");t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const i=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(i))}),25*Math.random())})))})),t.observe(e,{attributes:!0})}(),async function(){const t=await fetch("https://blockchain.info/ticker");var e;e=await t.json(),document.querySelector(".btc-preco").innerHTML=(1e3/e.BRL.buy).toFixed(4)}()})();
