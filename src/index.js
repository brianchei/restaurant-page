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
    let bread = document.querySelector('.bread');
    let wine = document.querySelector('.wine');
    let menu = document.querySelector('.menu');
    let reservations = document.querySelector('.reservations');

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
            case 'bread':
                breadLoad();
                console.log(currentPage);
                break;
            case 'wine':
                wineLoad();
                console.log(currentPage);
                break;
            case 'menu':
                menuLoad();
                console.log(currentPage);
                break;
            case 'reservations':
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
    bread.addEventListener('click', clickHandler);
    wine.addEventListener('click', clickHandler);
    menu.addEventListener('click', clickHandler);
    reservations.addEventListener('click', clickHandler);
}

screenController();