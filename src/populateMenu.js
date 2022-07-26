import { createDivs, createElem } from './createDOMElements';

function Foods(item, description, price) {
    this.item = item;
    this.description = description;
    this.price = price;
}

const loadMenu = () => {
    if (!document.querySelector('#menu-wrapper')) {
        const content = document.querySelector('#content');
        const apps = [
            new Foods('Salsas', 'Four House Salsas with Homemade chips', '7.00'),
            new Foods('Guac', 'Abuela’s secret recipe and housemade tortilla chips', '14.00'),
            new Foods('Elote', 'Grilled corn, homemade crema chili and lime.', '7.00'),
            new Foods('El Chapo', 'Bacon wrapped Jumbo beef hot dog, homemade crema and pico de gallo.', '$8.00'),
            new Foods('Shrimp Cocktail', 'Black Tiger Shrimp with citrus tomato sauce served with homemade chips', '16.00'),
            new Foods('Flautas', 'Three rolled fried tacos stuffed with queso fresco, fried, served in salsa verde topped with crema and shredded cheese', '14.00'),
        ];

        const tacos = [
            new Foods('Tacos Mixtos', 'Select 4 meats for your tacos. Extra order of tortillas recommended.', '16.00'),
            new Foods('Pollo Tacos', 'Three shredded chicken tacos topped with pico de gallo.', '13.00'),
            new Foods('Arrachera Tacos', 'Grilled marinated diced steak.** Served with cilantro and onion', '13.00'),
        ];

        const plates = [
            new Foods('Chile Relleno Plato', 'Poblano pepper stuffed with Oaxaca cheese, pinto beans and tomato based sauce. Comes with rice and beans', '20.00'),
            new Foods('Chile Relleno Plato', 'Poblano pepper stuffed with Oaxaca cheese, pinto beans and tomato based sauce. Comes with rice and beans', '20.00'),
            new Foods('Enchiladas Suizas Plato', 'Traditional enchiladas Verde stuffed with shredded chicken and melted cheese blend.Comes with a side of rice and beans', '19.00'),
            new Foods('Enchiladas Vegetariana', 'Cremini mushrooms, leeks, fennel and tomatillo salsa. ***With side of rice and beans', '21.00'),
        ];

        const menu = createDivs(content, 'menu-wrapper', '', 'content-class');
        const mw = createDivs(menu, 'mw', '', 'menu-item-wrapper');
        createDivs(mw, 'mw-title', 'Appetizers', 'list-header');
        const appetizers = createElem('ul', mw, '');
        for (let i = 0; i < apps.length; i++) {
            const listItem = createElem('li', appetizers, '', 'list-item');
            createElem('span', listItem, apps[i].item, 'item');
            createElem('span', listItem, apps[i].description, 'description');
            createElem('span', listItem, apps[i].price, 'price');
        }

        const tw = createDivs(menu, 'tw', '', 'menu-item-wrapper');
        createDivs(tw, 'tw-title', 'Tacos', 'list-header');
        const tacoWrapper = createElem('ul', tw, '');
        for (let i = 0; i < tacos.length; i++) {
            const listItem = createElem('li', tacoWrapper, '', 'list-item');
            createElem('span', listItem, tacos[i].item, 'item');
            createElem('span', listItem, tacos[i].description, 'price');
            createElem('span', listItem, tacos[i].price, 'price');
        }

        const pw = createDivs(menu, 'pw', '', 'menu-item-wrapper');
        createDivs(pw, 'pw-title', 'Plates', 'list-header');
        const plateWrapper = createElem('ul', pw, '');
        for (let i = 0; i < plates.length; i++) {
            const listItem = createElem('li', plateWrapper, '', 'list-item');
            createElem('span', listItem, plates[i].item, 'item');
            createElem('span', listItem, plates[i].description, 'price');
            createElem('span', listItem, plates[i].price, 'price');
        }
    }
};

function underlineTitle() {
    const ul = document.querySelectorAll('.menu-item-wrapper');
    console.log(ul);
    ul.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.firstChild.style.textDecoration = 'underline';
        });

        element.addEventListener('mouseleave', () => {
            element.firstChild.style.textDecoration = 'none';
        });
    });
}

function hideMenu() {
    if (document.querySelector('#menu-wrapper')) { document.querySelector('#menu-wrapper').remove(); }
}

export { loadMenu, hideMenu, underlineTitle };
