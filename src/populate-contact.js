import { createDivs, createElem } from './createDOMElements';
// const createDivs = (parent, idName, textContent, className) => {

const loadContact = () => {
    if (!document.querySelector('#contact-content')) {
        const content = document.querySelector('#content');
        const main = createDivs(content, 'contact-content', '', 'content-class');
        createDivs(main, 'content-title', 'CONTACT US!');
        const info = createDivs(main, 'info-wrapper', '');
        const number = createDivs(info, 'number-box', '', 'info-box');
        createElem('p', number, '(917)-947-9208', 'contact-info');
        const email = createDivs(info, 'email-box', '', 'info-box');
        createElem('p', email, 'info@gordoscantina.com', 'contact-info');
        const tagWrapper = createDivs(main, 'tag-wrapper', '');
        createElem('p', tagWrapper, 'Built by Saskia Binder', 'tag-info');
        const sourceCode = createElem('p', tagWrapper, 'Source Code', 'tag-info');
        sourceCode.id = 'source-code';
        sourceCode.addEventListener('click', () => {
            window.open('https://github.com/saskiabt/restaurant-website', 'blank');
        });
        const address = createDivs(info, 'address-box', '', 'info-box');
        const clickMe = createElem('p', address, `140 St Nicholas Ave \ 
                                                  Brooklyn, New York 11237`, 'contact-info')
        clickMe.addEventListener('click', () => {
            window.open('https://g.page/gordoscantina?share', 'blank');
        });
    }
};


const hideContact = () => {
    if (document.querySelector('#contact-content')) document.querySelector('#contact-content').remove();
};

export { loadContact, hideContact };
