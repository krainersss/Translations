let pw_confirm = document.getElementById("pw_confirm")
let error = document.getElementById("error")
let form = document.getElementById("form")

// function authenticate() {
//     error.style.display="none"
//     if (pw_input.value === ""){
//         error.style.display="block"
//         error.textContent="Please enter your password"
//     }
//     if (pw_input.value.length < 8) { 
//         error.style.display="block"
//         error.textContent="Password must be at least 8 characters"
//     }
//     if (!(/[A-Z]/.test(pw_input.value))) {
//         error.style.display="block"
//         error.textContent="Password must contain a capital letter."
//     }
//     if (!(/[0-9]/.test(pw_input.value))) { 
//         error.style.display="block"
//         error.textContent="Password must contain a number"
//     }
//     if (!(pw_input.value === pw_confirm.value)) {
//         error.style.display="block"
//         error.textContent="New Password and Password Confirm DO NOT MATCH"
//     }    
// }

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email_inp').value
    var a_password = document.getElementById("pw_inp").value
    var confirmPassword = pw_confirm.value
    // Client-side validation
    if (a_password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }
    fetch(this.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({inp_email: email, inp_password: a_password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Account created successfully! You can now log in.');
            window.location.href = 'index.html'; // Redirect to login page after successful registration
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});