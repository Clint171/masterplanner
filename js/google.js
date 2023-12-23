// google sign up
function onSignUp(credentials) {
    // handle cancellation
    if (credentials === null) {
        return;
    }
    fetch("http://127.0.0.1:3000/google-signup", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(() => {
        alert("Account created successfully");
        window.location.href = "/home.html"
    });
}

// google log in
