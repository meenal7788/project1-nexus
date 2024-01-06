const loginForm = document.querySelectorAll('.main-block')[0];
const signupForm = document.querySelectorAll('.main-block')[1];
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');

// Initially hide the signup form
signupForm.style.display = 'none';

// Show login form, hide signup form
signInBtnLink.addEventListener('click', function() {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

// Show signup form, hide login form
signUpBtnLink.addEventListener('click', function() {
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});