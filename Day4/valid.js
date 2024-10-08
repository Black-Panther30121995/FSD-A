function validated(){
const username=document.querySelector('.js-username').value;
const pass=document.querySelector('.js-password').value;
    if(username.length<10 || username.length ===0)
    {
     return false;
    }
    else{
        return true;
    }
}