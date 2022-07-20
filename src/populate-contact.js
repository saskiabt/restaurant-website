import { createDivs, createElem } from './createDOMElements';
// const createDivs = (parent, idName, textContent, className) => {

const loadContact = () => {
    if (!document.querySelector('#contact-content')) {
        const content = document.querySelector('#content');
        const main = createDivs(content, 'contact-content', '', 'content-class');
        createDivs(main, 'content-title', 'CONTACT US!');
        const info = createDivs(main, 'info-wrapper', '')
        const address = createDivs(info, 'address-box', '', 'info-box');
        createElem('p', address, '140 St Nicholas Ave, Brooklyn, New York 11237', 'contact-info');
        const number = createDivs(info, 'number-box', '', 'info-box');
        createElem('p', number, '(917)-947-9208', 'contact-info');
        const email = createDivs(info, 'email-box', '', 'info-box');
        createElem('p', email, 'info@gordoscantina.com', 'contact-info');
    }
};

const hideContact = () => {
    if (document.querySelector('#contact-content')) document.querySelector('#contact-content').remove();
};

export { loadContact, hideContact };
