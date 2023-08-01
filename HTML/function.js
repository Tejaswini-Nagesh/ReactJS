//Map function
//create new array  form original  array by applying transformation  function
 let salaries=[3000,5000,6000,7000,8000]
 let newSalaries=salaries.map(salary=>{
     //let incremented=salary/2;
     return salary*2;
 })
 console.log("after  50%  incrementation in new salary ",newSalaries);

 //reduce method 
 
 let num=[1,3,5,7,9];
 let sum=num.reduce(function(total,currentValue){
     return total+currentValue;
 },1)
 console.log(sum);


 //find method
 let students=[{id:1,name:"alex"},{id:2,name:"john"}];
 let result=students.find(student=>{
     return student.id==2;
 })
 console.log(result);

 //findIndex method
 //Execute  function for each array element
 //It return "index" of that array element who "first" pass the test otherwise -1

 let ages=[21,18,19,17,23]
 let resultage=ages.findIndex(age=>{
     return age>15;
 })
 console.log(resultage);

 //some
 //it return true when at least one condition is true
 let scores=[25,36,67,80,99];
 let resultscore=scores.some(score=>{
     return score>95;
 })
 console.log(resultscore);

 //every 
 //it return true if all element pass the condition
 let newresult=[20,29,60,10];
 let new1=newresult.every(new2=>{
     return new2>9;
 })
 console.log(new1);

 //flat 
 //it creates a new array with elements of subarrays concatenated  into it
 let arr=[1,2,3,[4,5,6]];
    console.log("before flat ",arr);
    let result5=arr.flat();
console.log("After flat",result5);

//flatMap
//it is a combition of map and flat followed by depth 1
let cart=[{
    name:"mobile phone",
    qty:2,
    price:2000,
},
{
    name:"iphone",
    qty:5,
    price:9000,

}]
let newcart=cart.flatMap(item=>{
    if(item.name==="mobile phone")
    {
        return [item,{
            name:"oppo",
            qty:9,
            price:9888
        }]
    }

})
console.log(newcart);

//filter method
//used to perform filteration on array
let gifts=["watch","ring","chocolate","teddy-bear"];
let filterArray=gifts.filter(gift=>{
    if(gift=="5" || gift=="1")
    {
        return gift
    }
})
console.log(filterArray);
console.log(gifts);