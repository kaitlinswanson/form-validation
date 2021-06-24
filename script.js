//form needs to collect: email. country, zip code, pw, confirm pw
//add event listeners for categories assign constants
const email = document.getElementById('email'); 
const country = document.getElementById('country'); 
const zipCode = document.getElementById('zipCode'); 
const password = document.getElementById('password'); 
const confirmPassword = document.getElementById('confirmPw'); 
const form = document.getElementById('form'); 
const errorSpace = document.getElementById('errorSpace');
const submitButton = document.getElementById('submit');


//confirm pw needs to match pw field.  
//change color to red if not filled out or incorrect
//submit button ex. if no errors "form successful" message

form.addEventListener('submit', (e) => {
    let errorMessages = [];
    if (password.value !== confirmPassword.value) { 
       errorMessages.push('Passwords entered do not match!');
       confirmPassword.style.background = "red";
    }
    if (password.value.length <= 6 || confirmPassword.value.length <= 0) { 
        errorMessages.push('Password must be more than 6 charachters!');
        password.style.background = "red";
    }
    if (errorMessages.length > 0) { 
        e.preventDefault(); //stop submit form if error
        errorSpace.innerText = errorMessages.join(', ');
    }
    if (errorMessages.length === 0) { 
        e.preventDefault(); //this form does not need to actually submit, just proof the verifications work.
        errorSpace.innerText = "Your information has been submitted. HIGH FIVE!";
        errorSpace.style.color = "green";
    }
});

