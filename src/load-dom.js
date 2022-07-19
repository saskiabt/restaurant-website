import Icon from './img/interior-gigapixel.png';
import { createDivs, addImage } from './createDOMElements';

const loadDom = () => {
    const content = document.querySelector('#content');
    const header = createDivs(content, 'header', '');
    createDivs(header, 'title', "Gordo's Cantina");
    const nav = createDivs(header, 'nav', null);
    createDivs(nav, 'menu-btn', 'Menu');
    createDivs(nav, 'about-btn', 'About');
    createDivs(nav, 'contact-btn', 'Contact');
    const main = createDivs(content, 'main', 'Main');
    createDivs(main, 'main-content', '');
    addImage(main, 'interior', null, Icon);
    createDivs(content, 'menu', '');
    createDivs(content, 'about', '');
    createDivs(content, 'contact', '');
};

export default loadDom;
