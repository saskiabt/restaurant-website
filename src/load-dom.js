/* eslint-disable indent */
import Interior from './img/interior-gigapixel.png';
// import Logo from './img/logo.png';
import { createDivs, addImage } from './createDOMElements';

const loadDom = () => {
    const content = document.querySelector('#content');
    // header
    const header = createDivs(content, 'header', '', null);
    createDivs(header, 'title', "Gordo's Cantina", null);
    const nav = createDivs(header, 'nav', null, null);
    createDivs(nav, 'home-btn', 'Home', 'nav-btn');
    createDivs(nav, 'menu-btn', 'Menu', 'nav-btn');
    createDivs(nav, 'contact-btn', 'Contact', 'nav-btn');
    // main page
    const main = createDivs(content, 'main', '', null);
    const mainContent = createDivs(main, 'main-content', '', null);
    // interior image 
        const interiorWrapper = createDivs(mainContent, 'image-wrapper', '', null);
        addImage(interiorWrapper, 'interior', null, Interior);
    // about 
        const about = createDivs(mainContent, 'about', '', null);
        // addImage(about, 'about-logo', null, Logo);
        const aboutInfoWrapper = createDivs(about, '', '', null);
        createDivs(aboutInfoWrapper, 'welcome', "Gordo's of Bushwick", null);
        createDivs(aboutInfoWrapper, 'blurb', `Bringing Mexican food in its most original and simple form to New York. 
        Mimicking the traditional food of Central Mexico.`, null);
        const hours = createDivs(mainContent, 'hours', '', null);
        createDivs(hours, 'hours-title', 'Summer Hours:', null);
        createDivs(hours, 'times', '\n Mon 12:00 - 10:00 \n Tues 12:00 - 10:00 \n Wed 12:00 - 10:00 \n Thur 12:00 - 10:00 \n Fri - Sat 12:00 - 11:00 \n Sun 12:00 - 9:00', null);
    // food pictures 
        const foodPicturesWrapper = createDivs(mainContent, 'food-pics-wrapper', '', null);
        
    // createDivs(content, 'menu', '');
    // createDivs(content, 'contact', '');
};

export default loadDom;
