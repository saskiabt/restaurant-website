import { createDivs, addImage, createElem } from './createDOMElements';
// const createElem = (type,parent, textContent, className)
// const createDivs = (parent, idName, textContent, className)

const loadMenu = () => {
    const content = document.querySelector('#content');
    const apps = [
        { item: 'Salsas', price: '$7.00' },
        { item: 'Guac', price: '$14.00' },
        { item: 'Elote', price: '$7.00' },
        { item: 'El Chapo', price: '$8.00' },
        { item: 'Shrimp Cocktail', price: '$16.00' },
        { item: 'Flautas', price: '$14.00' },
    ];

    const tacos = [
        { item: 'Tacos Mixtos', description: 'Select 4 meats for your tacos. Extra order of tortillas recommended.', price: '16.00' },
        { item: 'Pollo Tacos', description: 'Three shredded chicken tacos topped with pico de gallo.', price: '13.00' },
        { item: 'Arrachera Tacos', description: 'Grilled marinated diced steak.** Served with cilantro and onion', price: '$13.00' },
    ];

    const plates = [
        { item: 'Chile Relleno Plato', description: 'Poblano pepper stuffed with Oaxaca cheese, pinto beans and tomato based sauce. Comes with rice and beans', price: '20.00' },
        { item: 'Chile Relleno Plato', description: 'Poblano pepper stuffed with Oaxaca cheese, pinto beans and tomato based sauce. Comes with rice and beans', price: '20.00' },
        { item: 'Enchiladas Suizas Plato', description: 'Traditional enchiladas Verde stuffed with shredded chicken and melted cheese blend.Comes with a side of rice and beans', price: '19.00' },
        { item: 'Enchiladas Vegetariana', description: 'Cremini mushrooms, leeks, fennel and tomatillo salsa. ***With side of rice and beans', price: '21.00' },
    ];

    const menu = createDivs(content, 'menu-wrapper', 'Menu');
    const appetizers = createElem('ul', menu, 'Appetizers', 'list-header');
    for (let i = 0; i < apps.length; i++) {
        const listItem = createElem('li', appetizers, '', 'list-item');
        createElem('span', listItem, apps[i].item, 'item');
        createElem('span', listItem, apps[i].price, 'price');
    }

    const tacoWrapper = createElem('ul', menu, 'Tacos', 'list-header');
    for (const taco of tacos) {
        const listItem = createElem('li', tacoWrapper, '', 'list-item');
        createElem('span', listItem, taco.item, 'item');
        createElem('span', listItem, taco.description, 'price');
        createElem('span', listItem, taco.price, 'price');
    }

    const plateWrapper = createElem('ul', menu, 'Plates', 'list-header');
    for (const plate of plates) {
        const listItem = createElem('li', plateWrapper, '', 'list-item');
        createElem('span', listItem, plate.item, 'item');
        createElem('span', listItem, plate.description, 'price');
        createElem('span', listItem, plate.price, 'price');
    }
};

const hideMenu = () => {
    document.querySelector('#menu-wrapper').style.display = 'none';
};

const showMenu = () => {
    document.querySelector('#menu-wrapper').style.display = 'flex';
};

export { loadMenu, hideMenu, showMenu };
