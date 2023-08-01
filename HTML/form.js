//form event(submit form)
let form=document.querySelector('.sign-up-form');
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let passwordPattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$"
console.log(form);


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(form.useremail.value,form.password.value);
   // console.log("submit the form successfully");
   let passwordValue=form.password.value;
console.log(passwordValue);
let result=passwordValue.match(passwordPattern);
if(result)
{
    console.log("your password is strong");
}
else{
    console.log("try again");
}
})