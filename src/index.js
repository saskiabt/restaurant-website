import loadDom from './load-dom';
import { loadMainPage, hideMainPage } from './populate-main';
import { loadMenu, hideMenu } from './populateMenu';
import './style.css';

loadDom();
loadMainPage();

document.querySelector('#menu-btn').addEventListener('click', () => {
    hideMainPage();
    loadMenu();
});

document.querySelector("#home-btn").addEventListener('click', () => {
    hideMenu();
    loadMainPage();
});
