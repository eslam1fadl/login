//main-login.js
var email = document.getElementById('email');
var password = document.getElementById('password');
var btn = document.getElementById('btn');
var pvaild=document.getElementById('pvaild');
var box=document.getElementById('box');
var namee;
function check(event=namee) {
  if(Validations(email)&&Validations(password))
  {
  event.preventDefault(); 
  var accounts = JSON.parse(localStorage.getItem('accounts')) || [];  
  var isValid = false; 

  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].email === email.value && accounts[i].pass === password.value) {
      isValid = true; 
      localStorage.setItem('username', accounts[i].pname);
            break; 
    }
  }

  if (isValid) {
    Accountremove(); 
    window.location.href = 'home.html'; 
  } else {
    
    pvaild.classList.replace('d-none', 'd-block');

  }
  }
  else{
    pvaild.classList.replace('d-none', 'd-block');
  }
}

function Accountremove() {
  email.value = "";
  password.value = "";
}

btn.addEventListener('click', check);

function Validations(input) {
  var regex={
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


  

