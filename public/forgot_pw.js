let form = document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    var input_email = document.getElementById("name").value
    fetch("/forgot-password", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: input_email}),
        credentials: 'include'
    }).then(response => {
        return response.json().then(data => {
            if (!response.ok) {
                throw new Error("BOOMBAYA")
            }
            console.log(data)
            return data;
        })
    }).then(data => {
        if (!data.success) {
            alert(data.message)
        } else {
            alert(data.message)
            window.location.href = "reset-password.html"
        }
    })
})