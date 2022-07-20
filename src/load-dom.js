/* eslint-disable indent */
// import Interior from './img/interior-gigapixel.png';
// import imgTwo from './img/2.png';
// import imgFive from './img/5.png';
// import imgSix from './img/6.png';
// import Logo from './img/logo.png';
import { createDivs } from './createDOMElements';

const loadDom = () => {
    const content = document.querySelector('#content');
    // header
    const header = createDivs(content, 'header', '');
    createDivs(header, 'title', "Gordo's Cantina");
    const nav = createDivs(header, 'nav', null);
    createDivs(nav, 'home-btn', 'Home', 'nav-btn');
    createDivs(nav, 'menu-btn', 'Menu', 'nav-btn');
    createDivs(nav, 'contact-btn', 'Contact', 'nav-btn');
};

export default loadDom;
