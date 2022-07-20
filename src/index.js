import loadDom from './load-dom';
import { loadMainPage, hideMainPage, showMainPage } from './populate-main';
import { loadMenu, showMenu, hideMenu } from './populateMenu';
import './style.css';

loadDom();
loadMainPage();

document.querySelector('#menu-btn').addEventListener('click', () => {
    hideMainPage();
    loadMenu();
});

document.querySelector("#home-btn").addEventListener('click', () => {
    hideMenu();
    showMainPage();
});