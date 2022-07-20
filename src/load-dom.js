/* eslint-disable indent */
import Interior from './img/interior-gigapixel.png';
import imgTwo from './img/2.png';
import imgFive from './img/5.png';
import imgSix from './img/6.png';
// import Logo from './img/logo.png';
import { createDivs, addImage, createPara} from './createDOMElements';

const loadDom = () => {
    const content = document.querySelector('#content');
    // header
    const header = createDivs(content, 'header', '');
    createDivs(header, 'title', "Gordo's Cantina");
    const nav = createDivs(header, 'nav', null);
    createDivs(nav, 'home-btn', 'Home', 'nav-btn');
    createDivs(nav, 'menu-btn', 'Menu', 'nav-btn');
    createDivs(nav, 'contact-btn', 'Contact', 'nav-btn');
    // main page
    const main = createDivs(content, 'main', '');
    const mainContent = createDivs(main, 'main-content', '');
    // interior image
        const interiorWrapper = createDivs(mainContent, 'image-wrapper', '');
        addImage(interiorWrapper, 'interior', null, Interior);
    // about
        const about = createDivs(mainContent, 'about', '');
        // addImage(about, 'about-logo', null, Logo);
        const aboutInfoWrapper = createDivs(about, '', '');
        createDivs(aboutInfoWrapper, 'welcome', "Gordo's of Bushwick");
        createDivs(aboutInfoWrapper, 'blurb', 'Bringing Mexican food in its most original and simple form to New York. Mimicking the traditional food of Central Mexico.\nIndoor & Outdoor Dining. Open 7 days a week. No Reservations, just walk in!');
        createPara(aboutInfoWrapper,'140 St Nicholas Ave, Brooklyn, New York 11237');
        // createDivs(aboutInfoWrapper,'dining','Indoor & Outdoor Dining'); 
        // createDivs(aboutInfoWrapper,'')
    // food pictures
       const foodPicturesWrapper = createDivs(mainContent, 'food-pics-wrapper', '');
       addImage(foodPicturesWrapper, '', 'food-pics', imgTwo);
       addImage(foodPicturesWrapper, '', 'food-pics', imgFive);
       addImage(foodPicturesWrapper, '', 'food-pics', imgSix);

    // hours
        const hours = createDivs(mainContent, 'hours', '');
        createDivs(hours, 'hours-title', 'Summer Hours:');
        createPara(hours,'Mon 12:00 - 10:00','hour');
        createPara(hours,'Tues 12:00 - 10:00','hour');
        createPara(hours,'Wed 12:00 - 10:00','hour');
        createPara(hours,'Thurs 12:00 - 10:00','hour');
        createPara(hours,'Fri-Sat 12:00 - 11:00','hour');
        createPara(hours,'Sun 12:00 - 9:00','hour');
    // createDivs(content, 'menu', '');
    // createDivs(content, 'contact', '');
};

export default loadDom;
