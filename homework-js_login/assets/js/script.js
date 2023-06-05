"use strict";

function checkValue() {
  const emailInput = document.getElementById('email_inp');
  const passwordInput = document.getElementById('password_inp');
  
  const email = 'revanepiri1@gmail.com';
  const password = '00000';
  
  console.log(emailInput.value);
  
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Email or password field is empty');
  } else if (emailInput.value !== email || passwordInput.value !== password) {
    alert('Email or password is wrong');
  } else {
    alert('Welcome to hell :)');
  }
  
  debugger;
}
