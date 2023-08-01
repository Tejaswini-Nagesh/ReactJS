//DoM
console.log(document.URL);

//Getting html using using querselector and queryselectorall
//queryselector returns "first element" that match css selector
//to get all matched elements we use queryselctorAll

let resultElement=document.querySelectorAll('p');
console.log(resultElement);

let result=document.querySelector('.coderClass');
console.dir(result);

//access id element
let resultID=document.querySelector('#coder');
console.log(resultID);


//updating and changing the content
// innertext / ignore space
let heading=document.querySelector('h1');
console.log(heading.innerText);

//innerHTML
//It does not ignore space
//retrive and set content in HTML format
console.log(heading.innerHTML);


//getting and setting attribute of elements

let codeDostLink=document.querySelector('a');
console.log(codeDostLink.getAttribute('href'));
//set attribute
codeDostLink.setAttribute('href',"https://www.youtube.com/watch?v=lGmRnu--iU8&t=14627s&ab_channel=CoderDost")
console.log(codeDostLink.getAttribute('href'));
codeDostLink.innerText="Master class of react";

//Adding style
let heading1=document.querySelector('h1');
heading.style.color="pink";
//add,remove and replace class of element
let heading2=document.querySelector('h1');
//add class
heading2.classList.add('newClass');
// remove class
heading2.classList.remove('newClass');

//parent ,childern and sibling elements
let parentElement=document.querySelector('.content');
//all childern of parent
console.log(parentElement.children);

let childElement=document.querySelector('h2');
console.log(childElement.parentElement);
