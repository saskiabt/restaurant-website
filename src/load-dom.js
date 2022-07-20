import { createDivs } from './createDOMElements';

const loadDom = () => {
    const content = document.querySelector('#content');
    const header = createDivs(content, 'header', '');
    createDivs(header, 'title', "Gordo's Cantina");
    const nav = createDivs(header, 'nav', null);
    createDivs(nav, 'home-btn', 'Home', 'nav-btn');
    createDivs(nav, 'menu-btn', 'Menu', 'nav-btn');
    createDivs(nav, 'contact-btn', 'Contact', 'nav-btn');
};

export default loadDom;
