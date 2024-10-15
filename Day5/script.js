/*let x=confirm("Are you sure to log out");
alert(x);
*/

/*
let v=prompt("Enter your name:", "Shivani");
alert(v);
*/

/*
let disp=()=>{
    console.log("Welcome to the function in js");
};

disp();
*/

/*
let say =()=> console.log("This is a function in js");
*/

/*
let sum=(x,y)=>{
    return x+y;
};
console.log(sum(2,3));
*/
/*
document.querySelector('.js-button').addEventListener('mouseover',()=>{
    alert("You have hovered overt the button");
});
*/
let p1=document.querySelector('p');
let display=()=>{
    p1.innerHTML='updated';
    p1.style.backgroundColor='blue';
}