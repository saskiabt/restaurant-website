import Icon from './img/interior-gigapixel.png';

const loadDom = () => {
    const createDivs = (parent, idName, textContent) => {
        const elem = document.createElement('div');
        parent.appendChild(elem);
        elem.setAttribute('id', idName);
        elem.textContent = textContent;
        return elem;
    };

    const addImage = (parent, id, className, src) => {
        const image = new Image();
        image.id = id;
        image.classList.add(className);
        parent.appendChild(image);
        image.src = src;
        return image;
    };

    const content = document.querySelector('#content');
    const header = createDivs(content, 'header', '');
    createDivs(header, 'title', "Gordo's");
    const nav = createDivs(header, 'nav', null);
    createDivs(nav, 'home', 'Home');
    createDivs(nav, 'about', 'About');
    createDivs(nav, 'contact', 'Contact');
    const main = createDivs(content, 'main', '');
    createDivs(main, 'main-content', 'Main');
    addImage(main, 'interior', null, Icon);
    createDivs(content, 'about', 'About');
    createDivs(content, 'contact', 'Contact');
};

export default loadDom;
