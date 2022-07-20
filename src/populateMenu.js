import { createDivs, addImage, createElem } from './createDOMElements';

const loadMenu = () => {
    if (!document.querySelector('#menu-wrapper')) {
        const content = document.querySelector('#content');
        const apps = [
            { item: 'Salsas', description: 'Four House Salsas with Homemade chips', price: '7.00' },
            { item: 'Guac', description: 'Abuela’s secret recipe and housemade tortilla chips', price: '14.00' },
            { item: 'Elote', description: 'Grilled corn, homemade crema chili and lime.', price: '7.00' },
            { item: 'El Chapo', description: 'Bacon wrapped Jumbo beef hot dog, homemade crema and pico de gallo.', price: '$8.00' },
            { item: 'Shrimp Cocktail', description: 'Black Tiger Shrimp with citrus tomato sauce served with homemade chips', price: '16.00' },
            { item: 'Flautas', description: 'Three rolled fried tacos stuffed with queso fresco, fried, served in salsa verde topped with crema and shredded cheese', price: '14.00' },
        ];

        const tacos = [
            { item: 'Tacos Mixtos', description: 'Select 4 meats for your tacos. Extra order of tortillas recommended.', price: '16.00' },
            { item: 'Pollo Tacos', description: 'Three shredded chicken tacos topped with pico de gallo.', price: '13.00' },
            { item: 'Arrachera Tacos', description: 'Grilled marinated diced steak.** Served with cilantro and onion', price: '13.00' },
        ];

        const plates = [
            { item: 'Chile Relleno Plato', description: 'Poblano pepper stuffed with Oaxaca cheese, pinto beans and tomato based sauce. Comes with rice and beans', price: '20.00' },
            { item: 'Chile Relleno Plato', description: 'Poblano pepper stuffed with Oaxaca cheese, pinto beans and tomato based sauce. Comes with rice and beans', price: '20.00' },
            { item: 'Enchiladas Suizas Plato', description: 'Traditional enchiladas Verde stuffed with shredded chicken and melted cheese blend.Comes with a side of rice and beans', price: '19.00' },
            { item: 'Enchiladas Vegetariana', description: 'Cremini mushrooms, leeks, fennel and tomatillo salsa. ***With side of rice and beans', price: '21.00' },
        ];
        const menu = createDivs(content, 'menu-wrapper', '');
        // createDivs(menu,'menu-title','Menu', 'para-heading');

        const mw = createDivs(menu, 'mw', '', 'menu-item-wrapper');
        const appetizers = createElem('ul', mw, 'Appetizers', 'list-header');
        for (let i = 0; i < apps.length; i++) {
            const listItem = createElem('li', appetizers, '', 'list-item');
            createElem('span', listItem, apps[i].item, 'item');
            createElem('span', listItem, apps[i].description, 'description');
            createElem('span', listItem, apps[i].price, 'price');
        }

        const tw = createDivs(menu, 'tw', '', 'menu-item-wrapper');
        const tacoWrapper = createElem('ul', tw, 'Tacos', 'list-header');
        for (let i = 0; i < tacos.length; i++) {
            const listItem = createElem('li', tacoWrapper, '', 'list-item');
            createElem('span', listItem, tacos[i].item, 'item');
            createElem('span', listItem, tacos[i].description, 'price');
            createElem('span', listItem, tacos[i].price, 'price');
        }

        const pw = createDivs(menu, 'pw', '', 'menu-item-wrapper');

        const plateWrapper = createElem('ul', pw, 'Plates', 'list-header');
        for (let i = 0; i < plates.length; i++) {
            const listItem = createElem('li', plateWrapper, '', 'list-item');
            createElem('span', listItem, plates[i].item, 'item');
            createElem('span', listItem, plates[i].description, 'price');
            createElem('span', listItem, plates[i].price, 'price');
        }
    }
};

function hideMenu() {
    if (document.querySelector('#menu-wrapper')) { document.querySelector('#menu-wrapper').remove(); }
}

export { loadMenu, hideMenu };
