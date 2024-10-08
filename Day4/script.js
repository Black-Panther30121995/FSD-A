var x=14;
let y=35;
/* let y=90; let shows an erroe when we redeclare the same assigned variable*/
function display(){
    var x=12;
    let y=80;
    console.log("Hello",x,y);
};
display();

document.querySelector('.js-login-but').addEventListener('click', ()=>{
    const username=document.querySelector('.js-username').value;
    const pass=document.querySelector('.js-password').value;
  
    if(username === 'admin' && pass==='admin'){
        document.querySelector('.js-result').innerHTML="Registration Successfull";
    }
    else{
        document.querySelector('.js-result').innerHTML="Invalid Login";
    }
});

