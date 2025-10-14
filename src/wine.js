function wineLoad() {
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

    let left = document.createElement('div');
    left.classList.add('left');
    let leftImg = document.createElement('img');

    left.appendChild(leftImg);

    
    let right = document.createElement('div');
    right.classList.add('right');
    let rightHeader = document.createElement('h2');
    rightHeader.classList.add('heading2');
    let rightText = document.createElement('p');
    rightText.classList.add('description');

    right.appendChild(rightHeader);
    right.appendChild(rightText);


    // add all to section
    body.appendChild(left);
    body.appendChild(right);

    content.appendChild(body);
}

export default wineLoad;