let form = document.getElementById("form").addEventListener(submit, (event) => {
    event.preventDefault();
    var input_email = document.getElementById("name").value
    fetch('/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email: input_email})
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = "reset-password.html"
        } else {
            alert("An error occured")
        }
    })
    .catch(error => console.error("error", error))
})