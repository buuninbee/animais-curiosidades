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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordin)\n/* harmony export */ });\nclass Accordin {\n  constructor(list){\n   this.acordinList = document.querySelectorAll(list);\n   this.activeclass = 'ativo'\n  }\n  \n  toggleAccordion(item) {\n    item.classList.toggle(this.activeclass);\n    item.nextElementSibling.classList.toggle(this.activeclass);\n  }\n\n  activeAcordin(){\n    this.acordinList.forEach((item) => { item.addEventListener(\"click\", () => this.activeAcordin(item)); });\n  }\n\n  /// iniciar função\n  init(){\n    if (this.acordinList.length){\n      this.toggleAccordion(this.acordinList[0])\n      this.activeAcordin()\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais/./js/module/accordin.js?");

/***/ }),

/***/ "./js/module/anima-numeros.js":
/*!************************************!*\
  !*** ./js/module/anima-numeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observeTarget, observeclass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observeTarget = document.querySelector(observeTarget)\n    this.observeclass = observeclass\n  }\n\n  static incrementarNumero(numero){\n    const total = +numero.innerText;\n\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n    const timer = setInterval(() => {\n      start  += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n\n  animaNumeros() {\n    this.numeros.forEach((numero) => { this.incrementarNumero(numero) });\n  }\n\n\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observeclass)) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n\n  addMutation(){\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.observeTarget, { attributes: true });\n  }\n\n  init(){\n    if(this.numeros && this.observeTarget){\n      this.addMutation()\n    }\n    return this\n  }\n}\n\n//# sourceURL=webpack://animais/./js/module/anima-numeros.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchBitcoin)\n/* harmony export */ });\nfunction FetchBitcoin(url, target) {\n  function converterBtc(bitcoin) {\n    const div = document.querySelector(target);\n    div.innerHTML = (1000 / bitcoin.BRL.buy).toFixed(4);\n  }\n  \n  async function fetchapi() {\n    const moeda = await fetch(url);\n    const data = await moeda.json();\n\n    converterBtc(data);\n  }\n\n  fetchapi();\n}\n\n\n//# sourceURL=webpack://animais/./js/module/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/module/fetchapi.js":
/*!*******************************!*\
  !*** ./js/module/fetchapi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/module/anima-numeros.js\");\n\n\nfunction fetchAnimais(url, target) {\n  function createAnimal(animal) {\n   const div = document.createElement('div')\n   div.classList.add('numero-animal')\n   div.innerHTML = `<h3>${animal.specie}</h3><span data-numero >${animal.quanty}</span>`;\n  return div\n  }\n\n  function preencherAnimais(animal) {\n    const numerosGrid = document.querySelector(target)\n    const divanimal = createAnimal(animal)\n    numerosGrid.appendChild(divanimal)\n  }\n\n  function animaisAnima() {\n    const anima = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\",\".numeros\", \"ativo\");\n    anima.init()\n  }\n  async function criarAnimais() {\n   try {\n     const animaisResponse = await fetch(url)\n     const animaisJSON = await animaisResponse.json()  \n     animaisJSON.forEach(animal => { preencherAnimais(animal)\n     animaisAnima()\n   });\n   } catch (erro) {\n    console.log(erro)\n   }\n  }\n  return criarAnimais()\n}\n\n\n//# sourceURL=webpack://animais/./js/module/fetchapi.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(botaoAbrir, botaoFechar, containerModal){\n   this.botaoAbrir = document.querySelector(botaoAbrir);\n   this.botaoFechar = document.querySelector(botaoFechar);\n   this.containerModal = document.querySelector(containerModal);\n   \n   this.eventToggle = this.eventToggle.bind(this) \n   this.cliqueForaModal = this.cliqueForaModal.bind(this) \n  }\n\n  // adicione os event aos elementos do modal\n  toggleModal() {\n    this.containerModal.classList.toggle(\"ativo\");\n  }\n\n  eventToggle(){\n    this.toggleModal()\n  }\n\n  // fecha modal quando clicka do lado de fora\n\n  cliqueForaModal(event) {\n    if (event.target === this.containerModal) {\n      this.toggleModal();\n    }\n  }\n\n  addmodalEvents(){  \n    this.botaoAbrir.addEventListener(\"click\", this.eventToggle);\n    this.botaoFechar.addEventListener(\"click\", this.eventToggle);\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\n  }\n\n  init(){\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addmodalEvents()\n    }\n  }\n  \n}\n\n\n//# sourceURL=webpack://animais/./js/module/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimacaoScroll)\n/* harmony export */ });\nclass AnimacaoScroll {\n  constructor(sections){\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n\n    this.animeScroll = this.animeScroll.bind(this)\n  }\n\n  animeScroll() {\n    this.sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - this.windowMetade < 0;\n      if (isSectionVisible) {\n        section.classList.add(\"ativo\");\n      } else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n\n  init(){\n    this.animeScroll()\n    window.addEventListener(\"scroll\", this.animeScroll);   \n  }\n}\n\n\n//# sourceURL=webpack://animais/./js/module/scroll-animacao.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/scroll-suave.js */ \"./js/module/scroll-suave.js\");\n/* harmony import */ var _module_accordin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/accordin.js */ \"./js/module/accordin.js\");\n/* harmony import */ var _module_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/tabnav.js */ \"./js/module/tabnav.js\");\n/* harmony import */ var _module_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/modal.js */ \"./js/module/modal.js\");\n/* harmony import */ var _module_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/scroll-animacao.js */ \"./js/module/scroll-animacao.js\");\n/* harmony import */ var _module_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/dropdown.js */ \"./js/module/dropdown.js\");\n/* harmony import */ var _module_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/menu-mobile.js */ \"./js/module/menu-mobile.js\");\n/* harmony import */ var _module_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/funcionamento.js */ \"./js/module/funcionamento.js\");\n/* harmony import */ var _module_fetchapi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/fetchapi.js */ \"./js/module/fetchapi.js\");\n/* harmony import */ var _module_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/fetch-bitcoin.js */ \"./js/module/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst tab = new _module_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\ntab.init()\n\nconst scrollsuave = new _module_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"list\"] a[href^=\"#\"]');\nscrollsuave.init()\n\nconst accordinlist = new _module_accordin_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".js-acordion dt\")\naccordinlist.init()\n\nconst modal = new _module_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]')\nmodal.init()\n\n;(0,_module_fetchapi_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"../../animaisapi.json\", \".numeros-grid\")\n\n;(0,_module_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\n\nconst anima = new _module_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-anime=\"scroll\"]');\nanima.init()\n\n;(0,_module_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_module_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_module_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n\n//# sourceURL=webpack://animais/./js/script.js?");

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