function reservationsLoad() {
    /* create DOM content */
    let content = document.querySelector("#content");

    // create sections

    // body section
    let body = document.createElement('div');
    body.classList.add('body');

    // left
    let left = document.createElement('div');
    left.classList.add('left');

    let leftImg = document.createElement('img');

    let leftTop = document.createElement('div');
    leftTop.classList.add('top');
    let leftTopHeading = document.createElement('h1');
    leftTopHeading.classList.add('heading')

    let leftBottom = document.createElement('div');
    leftBottom.classList.add('bottom');
    let leftBottomHeading = document.createElement('h2');
    leftBottomHeading.classList.add('heading2');
    let leftBottomCredit = document.createElement('p');
    leftBottomCredit.classList.add('credit');

    left.appendChild(leftImg);
    left.appendChild(leftTop);
    left.appendChild(leftBottom);

    // right
    let right = document.createElement('div');
    right.classList.add('right');

    let form = document.createElement('form');
    let formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    let rightTop = document.createElement('div');
    rightTop.classList.add('top');
    let rightTopHeading = document.createElement('h2');
    rightTopHeading.classList.add('heading2');

    let rightBottom = document.createElement('div');
    rightBottom.classList.add('bottom');
    
    // form controls

    // first name
    let formControlFirst = document.createElement('div');
    formControlFirst.classList.add('form-control');


    let labelFirst = document.createElement('label');
    labelFirst.setAttribute('for', 'first-name');

    let inputFirst = document.createElement('input');
    inputFirst.setAttribute('type', 'text');
    inputFirst.setAttribute('name', 'first-name');
    inputFirst.id = 'first-name';
    inputFirst.setAttribute('placeholder', 'John');
    inputFirst.required = true;

    let spanFirst = document.createElement('span');

    formControlFirst.appendChild(labelFirst);
    formControlFirst.appendChild(inputFirst);
    formControlFirst.appendChild(spanFirst);

    // last name
    let formControlLast = document.createElement('div');
    formControlLast.classList.add('form-control');


    let labelLast = document.createElement('label');
    labelLast.setAttribute('for', 'last-name');

    let inputLast = document.createElement('input');
    inputLast.setAttribute('type', 'text');
    inputLast.setAttribute('name', 'last-name');
    inputLast.id = 'last-name';
    inputLast.setAttribute('placeholder', 'Doe');
    inputLast.required = true;

    let spanLast = document.createElement('span');

    formControlLast.appendChild(labelLast);
    formControlLast.appendChild(inputLast);
    formControlLast.appendChild(spanLast);

    // email
    let formControlEmail = document.createElement('div');
    formControlEmail.classList.add('form-control');


    let labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'email');

    let inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.id = 'email';
    inputEmail.setAttribute('placeholder', 'johndoe@gmail.com');
    inputEmail.required = true;

    let spanEmail = document.createElement('span');

    formControlEmail.appendChild(labelEmail);
    formControlEmail.appendChild(inputEmail);
    formControlEmail.appendChild(spanEmail);

    // phone
    let formControlTel = document.createElement('div');
    formControlTel.classList.add('form-control');


    let labelTel = document.createElement('label');
    labelTel.setAttribute('for', 'tel');

    let inputTel = document.createElement('input');
    inputTel.setAttribute('type', 'tel');
    inputTel.setAttribute('name', 'tel');
    inputTel.id = 'tel';
    inputTel.setAttribute('placeholder', '123-456-7890');
    inputTel.required = true;

    let spanTel = document.createElement('span');

    formControlTel.appendChild(labelTel);
    formControlTel.appendChild(inputTel);
    formControlTel.appendChild(spanTel);

    // date
    let formControlDate = document.createElement('div');
    formControlDate.classList.add('form-control');


    let labelDate = document.createElement('label');
    labelDate.setAttribute('for', 'date');

    let inputDate = document.createElement('input');
    inputDate.setAttribute('type', 'tel');
    inputDate.setAttribute('name', 'date');
    inputDate.id = 'date';
    inputDate.setAttribute('placeholder', '09/21/2025');
    inputDate.required = true;

    let spanDate = document.createElement('span');

    formControlDate.appendChild(labelDate);
    formControlDate.appendChild(inputDate);
    formControlDate.appendChild(spanDate);

    // party size
    let formControlParty = document.createElement('div');
    formControlParty.classList.add('form-control');


    let labelParty = document.createElement('label');
    labelParty.setAttribute('for', 'party');

    let inputParty = document.createElement('input');
    inputParty.setAttribute('type', 'tel');
    inputParty.setAttribute('name', 'party');
    inputParty.id = 'party';
    inputParty.setAttribute('placeholder', '6');
    inputParty.required = true;

    let spanParty = document.createElement('span');

    formControlParty.appendChild(labelParty);
    formControlParty.appendChild(inputParty);
    formControlParty.appendChild(spanParty);

    // reserve
    let formControlReserve = document.createElement('div');
    formControlReserve.classList.add('form-control');
    formControlReserve.classList.add('submit');

    let buttonReserve = document.createElement('button');
    buttonReserve.classList.add('reserve');

    formControlReserve.appendChild(buttonReserve);

    // add all to section
    rightBottom.appendChild(formControlFirst);
    rightBottom.appendChild(formControlLast);
    rightBottom.appendChild(formControlEmail);
    rightBottom.appendChild(formControlTel);
    rightBottom.appendChild(formControlDate);
    rightBottom.appendChild(formControlParty);
    rightBottom.appendChild(formControlReserve);


    formContainer.appendChild(rightTop);
    formContainer.appendChild(rightBottom);
    form.appendChild(formContainer);
    right.appendChild(form);


    body.appendChild(left);
    body.appendChild(right);

    content.appendChild(body);
}

export default reservationsLoad;