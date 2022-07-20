import { createDivs, addImage, createElem } from './createDOMElements';
import Interior from './img/interior-gigapixel.png';
import imgTwo from './img/2.png';
import imgFive from './img/5.png';
import imgSix from './img/6.png';

const loadMainPage = () => {
    if (!document.querySelector('#main')) {
        const content = document.querySelector('#content');
        const main = createDivs(content, 'main', '', 'content-class');
        const mainContent = createDivs(main, 'main-content', '');

        const interiorWrapper = createDivs(mainContent, 'image-wrapper', '');
        addImage(interiorWrapper, 'interior', null, Interior);

        const about = createDivs(mainContent, 'about', '');
        const aboutInfoWrapper = createDivs(about, '', '');
        createDivs(aboutInfoWrapper, 'welcome', "Gordo's of Bushwick", 'para-heading');
        createDivs(aboutInfoWrapper, 'blurb', 'Bringing Mexican food in its most original and simple form to New York. Mimicking the traditional food of Central Mexico.\nIndoor & Outdoor Dining. Open 7 days a week. No Reservations, just walk in!');

        const address = createElem('p', aboutInfoWrapper, '140 St Nicholas Ave, Brooklyn, New York 11237', 'address');
        address.addEventListener('click', () => {
            window.open('https://g.page/gordoscantina?share', 'blank');
        });

        const foodPicturesWrapper = createDivs(mainContent, 'food-pics-wrapper', '');
        addImage(foodPicturesWrapper, '', 'food-pics', imgTwo);
        addImage(foodPicturesWrapper, '', 'food-pics', imgFive);
        addImage(foodPicturesWrapper, '', 'food-pics', imgSix);

        const hours = createDivs(mainContent, 'hours', '');
        createDivs(hours, 'hours-title', 'Summer Hours:');
        createElem('p', hours, 'Mon 12:00 - 10:00', 'hour');
        createElem('p', hours, 'Tues 12:00 - 10:00', 'hour');
        createElem('p', hours, 'Wed 12:00 - 10:00', 'hour');
        createElem('p', hours, 'Thurs 12:00 - 10:00', 'hour');
        createElem('p', hours, 'Fri-Sat 12:00 - 11:00', 'hour');
        createElem('p', hours, 'Sun 12:00 - 9:00', 'hour');
    }
};

function hideMainPage() {
    if (document.querySelector('#main')) { document.querySelector('#main').remove(); }
}

export { loadMainPage, hideMainPage };
