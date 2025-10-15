function menuLoad() {
    /* create DOM content */
    let content = document.querySelector("#content");

    // create sections

    // header section
    let header = document.createElement('header');
    let heading = document.createElement('h1');
    heading.classList.add('heading');

    // structure elements
    header.appendChild(heading);

    content.appendChild(header);


    // body section
    let body = document.createElement('div');
    body.classList.add('body');

    let squares = document.createElement('div');
    squares.classList.add('squares')

    // bread
    let bread = document.createElement('div');
    bread.classList.add('bread');
    let breadText = document.createElement('p');
    let breadImg = document.createElement('img');

    // structure elements
    bread.appendChild(breadText);
    bread.appendChild(breadImg);

    // wine
    let wine = document.createElement('div');
    wine.classList.add('wine');
    let wineText = document.createElement('p');
    let wineImg = document.createElement('img');

    // structure elements
    wine.appendChild(wineText);
    wine.appendChild(wineImg);

    // lamb
    let lamb = document.createElement('div');
    lamb.classList.add('lamb');
    let lambText = document.createElement('p');
    let lambImg = document.createElement('img');

    // structure elements
    lamb.appendChild(lambText);
    lamb.appendChild(lambImg);

    // goat
    let goat = document.createElement('div');
    goat.classList.add('goat');
    let goatText = document.createElement('p');
    let goatImg = document.createElement('img');

    // structure elements
    goat.appendChild(goatText);
    goat.appendChild(goatImg);

    // add all to section
    squares.appendChild(bread);
    squares.appendChild(wine);
    squares.appendChild(lamb);
    squares.appendChild(goat);

    body.appendChild(squares);

    content.appendChild(body);
}

export default menuLoad;