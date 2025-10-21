function wineLoad() {
    /* create DOM content */
    let content = document.querySelector("#content");

    // create sections

    // header section
    let header = document.createElement('header');
    header.classList.add('header');
    let heading = document.createElement('h1');
    heading.classList.add('heading-wine');
    heading.textContent = 'WINE';

    // structure elements
    header.appendChild(heading);

    content.appendChild(header);


    // body section
    let body = document.createElement('div');
    body.classList.add('body');

    let left = document.createElement('div');
    left.classList.add('left');
    let leftImg = document.createElement('img');
    leftImg.classList.add('left-img');
    leftImg.src = 'https://breitenbachwine.com/wp-content/uploads/2021/09/cherry-wine.jpg';
    left.appendChild(leftImg);

    
    let right = document.createElement('div');
    right.classList.add('right');
    let rightHeader = document.createElement('h2');
    rightHeader.classList.add('heading2');
    rightHeader.textContent = 'WINE THE BLOOD';
    let rightText = document.createElement('p');
    rightText.classList.add('description');
    rightText.textContent = `'28 for this is my blood of the covenant, which is poured out for many for the forgiveness of sins. 29 I tell you I will not drink again of this fruit of the vine until that day when I drink it new with you in my Father's kingdom.”' Matthew 26:28-30 
    20 And likewise the cup after they had eaten, saying, “This cup that is poured out for you is the new covenant in my blood. Luke 22:20
    53 So Jesus said to them, “Truly, truly, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you have no life in you. 54 Whoever feeds on my flesh and drinks my blood has eternal life, and I will raise him up on the last day.`;

    right.appendChild(rightHeader);
    right.appendChild(rightText);


    // add all to section
    body.appendChild(left);
    body.appendChild(right);

    content.appendChild(body);
}

export default wineLoad;