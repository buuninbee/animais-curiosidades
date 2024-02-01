import ScrollSuave from "./module/scroll-suave.js";
import Accordin from "./module/accordin.js"
import TabNav from "./module/tabnav.js";
import Modal from "./module/modal.js";
import AnimacaoScroll from "./module/scroll-animacao.js";
import Dropdown from "./module/dropdown.js";
import MenuMobile from "./module/menu-mobile.js";
import Funcionamento from "./module/funcionamento.js";
import fetchAnimais from "./module/fetchapi.js";
import FetchBitcoin from "./module/fetch-bitcoin.js";


const tab = new TabNav();
tab.init()

const scrollsuave = new ScrollSuave('[data-menu="list"] a[href^="#"]');
scrollsuave.init()

const accordinlist = new Accordin(".js-acordion dt")
accordinlist.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

const anima = new AnimacaoScroll('[data-anime="scroll"]');
anima.init()

const dropDown = new Dropdown("[data-dropdown]");
dropDown.init()

const menumobile = new MenuMobile('[data-menu="button"', '[data-menu="list"');
menumobile.init()

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init()

fetchAnimais("./animaisapi.json", ".numeros-grid")

FetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
