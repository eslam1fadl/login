//main.sign
var email=document.getElementById('email');
var password=document.getElementById('password');
var pname=document.getElementById('pname');
var btnsign=document.getElementById('btnsign');
var pvaild=document.getElementById('pvaild');
var succses=document.getElementById('succses');

var account=[];
if(localStorage.getItem('accounts')){
  account=JSON.parse(localStorage.getItem('accounts'))
}
function insertAccount(event){
  if(Validations(pname)&&Validations(email)&&Validations(password))
  {
    pvaild.classList.replace('d-black','d-none')
    succses.classList.replace('d-none','d-black')

  event.preventDefault();
   var objaccount={
    pname:pname.value,
    email:email.value,
     pass:password.value
   }
   account.push(objaccount);
    localStorage.setItem('accounts',JSON.stringify(account));
    
    Accountremove();
    window.location.href = 'index.html';

}
else{
  pvaild.classList.replace('d-none','d-black')
  succses.classList.replace('d-black','d-none')
}
}
function Accountremove(){
email.value=null;
password.value=null;
}
btnsign.addEventListener('click', insertAccount);


function Validations(input) {
  var regex={
    pname: /([a-zA-Z0-9_\s]+)/g,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^[a-zA-Z0-9]{6,}$/
  }
  if(regex[input.id].test(input.value)){
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    return true;
  }
else{
  
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    return false;
}
  }