function breadLoad() {
    /* create DOM content */
    let content = document.querySelector("#content");

    // reset content height
    content.setAttribute('height', 'auto');

    // create sections

    // header section
    let header = document.createElement('header');
    header.classList.add('header');
    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'BREAD';

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
    leftImg.src = 'https://www.alyonascooking.com/wp-content/uploads/2018/03/unleavened-bread-matzah-.jpg';

    left.appendChild(leftImg);

    
    let right = document.createElement('div');
    right.classList.add('right');
    let rightHeader = document.createElement('h2');
    rightHeader.classList.add('heading2');
    rightHeader.textContent = 'BREAD OF LIFE';
    let rightText = document.createElement('p');
    rightText.classList.add('description');
    rightText.textContent = `'25When they found him on the other side of the sea, they said to him, "Rabbi, when did you come here?" 26Jesus answered them, "Truly, truly, I say to you, you are seeking me, not because you saw signs, but because you ate your fill of the loaves. 27Do not work for the food that perishes, but for the food that endures to eternal life, which the Son of Man will give to you. For on him God the Father has set his seal." 28Then they said to him, "What must we do, to be doing the works of God?" 29Jesus answered them, "This is the work of God, that you believe in him whom he has sent." 30So they said to him, "Then what sign do you do, that we may see and believe you? What work do you perform? 31Our fathers ate the manna in the wilderness; as it is written, ‘He gave them bread from heaven to eat.’" 32Jesus then said to them, "Truly, truly, I say to you, it was not Moses who gave you the bread from heaven, but my Father gives you the true bread from heaven. 33For the bread of God is he who comes down from heaven and gives life to the world." 34They said to him, "Sir, give us this bread always."
35Jesus said to them, "I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst. 36But I said to you that you have seen me and yet do not believe. 37All that the Father gives me will come to me, and whoever comes to me I will never cast out. 38For I have come down from heaven, not to do my own will but the will of him who sent me. 39And this is the will of him who sent me, that I should lose nothing of all that he has given me, but raise it up on the last day. 40For this is the will of my Father, that everyone who looks on the Son and believes in him should have eternal life, and I will raise him up on the last day."
41So the Jews grumbled about him, because he said, "I am the bread that came down from heaven." 42They said, "Is not this Jesus, the son of Joseph, whose father and mother we know? How does he now say, ‘I have come down from heaven’?" 43Jesus answered them, "Do not grumble among yourselves. 44No one can come to me unless the Father who sent me draws him. And I will raise him up on the last day. 45It is written in the Prophets, ‘And they will all be taught by God.’ Everyone who has heard and learned from the Father comes to me — 46not that anyone has seen the Father except he who is from God; he has seen the Father. 47Truly, truly, I say to you, whoever believes has eternal life. 48I am the bread of life. 49Your fathers ate the manna in the wilderness, and they died. 50This is the bread that comes down from heaven, so that one may eat of it and not die. 51I am the living bread that came down from heaven. If anyone eats of this bread, he will live forever. And the bread that I will give for the life of the world is my flesh."
52The Jews then disputed among themselves, saying, "How can this man give us his flesh to eat?" 53So Jesus said to them, "Truly, truly, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you have no life in you. 54Whoever feeds on my flesh and drinks my blood has eternal life, and I will raise him up on the last day. 55For my flesh is true food, and my blood is true drink. 56Whoever feeds on my flesh and drinks my blood abides in me, and I in him. 57As the living Father sent me, and I live because of the Father, so whoever feeds on me, he also will live because of me. 58This is the bread that came down from heaven, not like the bread the fathers ate, and died. Whoever feeds on this bread will live forever." 59Jesus said these things in the synagogue, as he taught at Capernaum.'`;

    right.appendChild(rightHeader);
    right.appendChild(rightText);


    // add all to section
    body.appendChild(left);
    body.appendChild(right);

    content.appendChild(body);
}

export default breadLoad;