import ScrollSuave from "./module/scroll-suave.js";
import Accordin from "./module/accordin.js"
import TabNav from "./module/tabnav.js";
import Modal from "./module/modal.js";
import initAnimacaoScroll from "./module/scroll-animacao.js";
import initDropdown from "./module/dropdown.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFetchapi from "./module/fetchapi.js";
import initFetchBitcoin from "./module/fetch-bitcoin.js";

const tab = new TabNav();
tab.init()

const scrollsuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollsuave.init()

const accordinlist = new Accordin(".js-acordion dt")
accordinlist.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

initAnimacaoScroll();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchapi();
initFetchBitcoin();
