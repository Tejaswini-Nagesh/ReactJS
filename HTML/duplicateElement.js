/*print duplicate element in array
const arr=[1,2,2,3,4,5,5];
const duplicate=arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
console.log(duplicate);
*/

/*print maxmimun no. in array

let arr=[1,4,7,10,34];
let maxFunction=(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre<cur?pre:cur;
    })
}
console.log(maxFunction(arr));
*/

/* print  second largest value in array and remove
const intArray=[2,4,1,8];
const largestValue=(arr)=>{
    firstlargest=Math.max(...arr);
        index=arr.indexOf(firstlargest)
        arr.splice(index,1)
        secondlargest=Math.max(...arr);

    return(secondlargest)


}
console.log(largestValue(intArray))
*/
/*filter and find method
const empArr=[
    {name:"john",age:22},
    {name:"kiyan",age:46},
    {name:"abc",age:30},
    {name:"ppp",age:99}
];

const arritem=empArr.find((item)=>{
    return item.age>30;
})
console.log(arritem);
*/
/*find missinf value in array
const arrNum=[1,2,3,4,5,7,8,10];
const misArray=[];
const missignValue=(arr)=>{
    const minValue=Math.min(...arr);
    const maxValue=Math.max(...arr);
    for(let i=minValue;i<maxValue;i++)
    {
        if(arr.indexOf(i)<0) //if it return -1 then no. is missing then it will push to array
        {
            misArray.push(i);
        }
    }
    return(misArray)
}
console.log(missignValue(arrNum));
*/

/*find even and odd no
const arr=[1,2,3,4,5,6];
const even=arr.filter((item)=>{
    return item%2===0;
})
const odd=arr.filter((item)=>{
    return item%2==!0;
})
console.log("even number",even);
console.log("odd number",odd);
*/
/*sum of array elements
const arrNum=[1,2,4,9];
const sumArr=(arr)=>{
    return arr.reduce((pre,curr)=>{
        return pre+curr;
    })

}
console.log(sumArr(arrNum));
*/
/*find factorial
const input=5;
let fact=1;
if(input>0)
{
    for(let i=1;i<=input;i++)
    {
        fact=fact*i;
    }
    console.log("factorial=",fact);


}
*/
/*find prime number
var number=5;
if(number==1)
{
    console.log(`${number} is not a prime no` );

}
else if(number<1)
{
    console.log(`prime no  of ${number} is not possible`);
}
else{
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            var result=`${number}   is not prime no`;
        }
        else{
            var result=`${number} is prime no.` ;
        }
    }
    console.log(result);
}
*/
/*Concat  arr and sort
let arr1=[2,3,4];
let arr2=[9,8,1];
const finalArr=arr1.concat(arr2);
console.log(finalArr);
const sortedArr=finalArr.sort(function(a,b){
    return a-b
})
console.log(sortedArr);
*/
/*using spread operator merge
let arr1=[2,3,1];
let arr2=[4,5,8];
let result=[...arr1,...arr2];
console.log(result);
*/
/*find intersection of two elements means common
var arr1=[2,9,6,8,4,4];
var arr2=[4,8,6,9,12];
let intersectionArr=arr1.filter((ele)=>{
    return arr2.includes(ele)
})
console.log([...new Set(intersectionArr)])
*/

//



