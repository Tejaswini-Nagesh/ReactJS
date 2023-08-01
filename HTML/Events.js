//Events
//add element
/*let eventElement=document.querySelector('.clickme');
console.log(eventElement);

eventElement.addEventListener('click',function(){
    console.log("clicked me");

})



//const ul=document.querySelector('ul')
let button=document.querySelector('.clickme');
button.addEventListener('click',function(){
    let li=document.createElement('li');
    li.textContent="something new added";
    //ul.append(li);
    ul.prepend(li);
})
//remove element
let event1=document.querySelectorAll('li');

event1.forEach(function(element){
    element.addEventListener('click',e=>{
        e.target.remove();

    })
})
           // console.log("Item clicked");
          // console.log(e);
          */
//Event bubbing 
const ul=document.querySelector('ul')
ul.addEventListener("click",(e)=>{
    //console.log("Inside UL");
    if(e.target.nodeName== "LI"){
    e.target.remove();
    }
})
