import loadDom from './load-dom';
import { loadMainPage, hideMainPage } from './populate-main';
import { loadMenu, hideMenu } from './populateMenu';
import { loadContact, hideContact } from './populate-contact';
import stickyHeader from './sticky-header';
import './style.css';

loadDom();
loadMainPage();
window.addEventListener('scroll', stickyHeader); 

document.querySelector('#menu-btn').addEventListener('click', () => {
    hideMainPage();
    hideContact();
    loadMenu();
});

document.querySelector('#home-btn').addEventListener('click', () => {
    hideMenu();
    hideContact();
    loadMainPage();
});

document.querySelector('#contact-btn').addEventListener('click', () => {
    hideMainPage();
    hideMenu();
    loadContact();
});
