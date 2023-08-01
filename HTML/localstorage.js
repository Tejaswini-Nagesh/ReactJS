//store and retrive data from localstorage
console.log(localStorage);

//set item in local storage
localStorage.setItem('passion',"programming");
localStorage.setItem('age',24);
console.log(localStorage);

//get item
console.log(localStorage.getItem('age'));

//update
localStorage.setItem("age",78);//overide previous value
console.log(localStorage);

//remove item
localStorage.removeItem("ag");
console.log(localStorage);
