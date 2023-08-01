let firstName="Teju"
let lastName="Nagesh"
console.log(firstName,lastName);

//using + operator to concate string
let fullName= firstName+ " " +lastName;
console.log(fullName);
//method using template literal
let full=`i want to be ${firstName}`
console.log(full);

// string methods
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.indexOf("a"));

let string='  coding running program';
console.log(string.trim());

//includes methods
console.log(string.includes('running'));
//slice method
console.log(firstName.slice(0,2));

//Arrays
let dishes=["Biryani","Chat","paratha"];
dishes[0]="jalebi";
console.log(dishes);
console.log(dishes.join('_')); //seperator

let newDishes=["sweet-dish","pani-puri"];
console.log(dishes.concat(newDishes));

console.log(dishes.push("icecream"));//return new length of array 
console.log(dishes);


//functions
let fun=function(name="defaultName",time="night"){
    console.log( `${name} you are invited into function ${time}`); //backtic
}
fun("mary","morning");

//how to pass default value
let ageCalculation=function(birthYear,currentYear=2023){
    let age=currentYear-birthYear;
    return age;
}
console.log(ageCalculation(2005));

//Arrow function
let invitation= name => { return`welcome to function ${name}`}
console.log(invitation("john"));

//passing function as parameter
let upperCase=function(str){
    return str.toUpperCase();
}
let lowerCase=function(str){
    return str.toLowerCase();
}

let transform=function(str,passanyfun)
{
    return fun(str);
}
console.log(transform("hello",upperCase));
/////////
//function returning another function

let compliment= function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
        return true;
    }
};
console.log(compliment("you are a good coder")("Danny"));

//setTimeOut  and setInterval
//settimeout-run function once after interval of time

//setInterval-run function repeatedly , starting after the interval of time then repeating
//setTimeOut(func|code,delay,arg1,arg2)

function greeting(){
    console.log("welcome to our coder family");
}
setTimeout(greeting,3000);

function greeting1(name){
    console.log(`welcome ${name} to our coder family`);

}
setTimeout(greeting1,4000,"mary");

//callback function

var talk=function(fx){
    fx();
}
var sayHi=function(){
    console.log("hii");
}
talk(sayHi);

//this keyword

let person={
    firstName:"harry",
    lastName:"brook",
    city:"japan",
    birthyear:1998,
    Education:"software engineer",

    getSummary:function(){
        return `${this.firstName} ${this.lastName} lives in ${this.city}`

    }
}
    console.log(person.getSummary());

// foreach loop
let dish=["panipuri","gulabjamun","shevpuri"];
dish.forEach(function(elements){
console.log(elements);
})

//call and apply manually
let mainplane={
    airline:"Fly India",
    code:"FI",
    bookings:[],
    book:function(){
        console.log(`${this.airline} ${this.code}`);
        this.bookings.push({flightName:`${this.airline},name:${this.name}`})
    }

}
mainplane.book(553,"carlos");
mainplane.book(444,"jack");
console.log(mainplane);










