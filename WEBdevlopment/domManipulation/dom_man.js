/***************dom manipulation contains 4 methods*******************/
// 1->document.getElementById('heading');  use always defer  in script
// const data = document.getElementById('hiii');
// console.log(data);
// 2->document.getElementsByTagName('h1); // it gives array of elements containg tags
// 3->document.getElementByClassName()




/***************traversal in DOM********/
// parent node

// const data = document.getElementsByClassName('heading')[0];
// const parent = data.parentNode;
// console.log(data);
// console.log(parent);

// 2 children
// const parent = document.getElementsByClassName('parent2')[0];
// console.log(parent.childNodes);

// 4 previousElementSibling && nextElementSibling
// const element = document.getElementsByClassName('child2')[0];
// console.log(element.nextElementSibling);  // iska output class3 hoga
// console.log(element.previousElementSibling);








/****************** manipulation of elements*************/
// const heading = document.getElementsByClassName('heading')[0];
// heading.innerHTML = 'hii ashish';
// heading.style.fontSize = '100px';

// adding new class
// heading.classList.add('tittle');

// removing old class
// heading.classList.remove('heading');





/********creating a new element ***********************/
// const add_data = document.createElement('h1');
// add_data.innerHTML = "i am a created element";
// add_data.classList.add('title');
// console.log(add_data);
// const parent = document.getElementById('parent3');
// parent.appendChild(add_data); // y element ko last mai add krta hai


// agr data ki ordering bhi accordingle krni hai to
// const new_data = document.createElement('h2');
// new_data.innerHTML = "ok bro i am last";
// add_data.insertAdjacentElement('beforebegin', new_data);



/*********DOM EVENTS*******/
const button = document.getElementById('btn');
const data_update = document.getElementById('parent3');
console.log(btn);
button.addEventListener('click', function (event) {
    data_update.style.color = 'red';
    console.log("button is clicked");

});