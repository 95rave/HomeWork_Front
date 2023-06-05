"use strict";

function togglePasswordVisibility() {
  let inp = document.getElementById('inp');
  let icon = document.getElementById('icon');

  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fa-solid fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fa-solid fa-eye';
  }
}

function checkPassword() {
  const passwordInput = document.getElementById('inp');
  const passwordStrength = document.getElementById('passwordStrength');
  const password = passwordInput.value;

  if (password.length < 8) {
    passwordStrength.textContent = 'Weak Password';
  } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    passwordStrength.textContent = 'Medium Password';
  } else {
    passwordStrength.textContent = 'Strong Password';
  }
}


