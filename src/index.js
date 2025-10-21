import "./styles.css";

import pageLoad from "./page-load.js";
import breadLoad from "./bread.js";
import wineLoad from "./wine.js";
import menuLoad from "./menu.js";
import reservationsLoad from "./reservations.js";

pageLoad();

/* Page switch functionality */

function screenController() {
    let currentPage = 'home';

    // initialize dom elements
    let content = document.querySelector('#content');
    let bread = document.querySelector('.break-bread');
    let wine = document.querySelector('.drink-wine');
    let menu = document.querySelector('.menu');
    let reservations = document.querySelector('.reserve');
    let home = document.querySelector('.home');

    function updateScreen() {
        // clear content
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

        // switch page
        switch (currentPage) {
            case 'home':
                pageLoad();
                console.log(currentPage);
                break;
            case 'break-bread':
                breadLoad();
                console.log(currentPage);
                break;
            case 'drink-wine':
                wineLoad();
                console.log(currentPage);
                break;
            case 'menu':
                menuLoad();
                console.log(currentPage);
                break;
            case 'reserve':
                reservationsLoad();
                console.log(currentPage);
                break;
            default:
                pageLoad();
                console.log(currentPage);
                return;
        }
    }

    function clickHandler(e) {
        let target = e.target;

        currentPage = target.className;

        updateScreen();
    }

    // add event listeners
    home.addEventListener('click', clickHandler);
    bread.addEventListener('click', clickHandler);
    console.log('event listener added');
    wine.addEventListener('click', clickHandler);
    menu.addEventListener('click', clickHandler);
    reservations.addEventListener('click', clickHandler);
}

screenController();