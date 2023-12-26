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
    }).then((data) => {
        localStorage.setItem('data', JSON.stringify(data));
        if(data.verified === true){
            window.location.href = "/dashboard.html";
        }
        else{
            window.location.href = "/verify-email.html";
        }
    });
}

// google sign in
function onSignIn(credentials) {
    // handle cancellation
    if (credentials === null) {
        return;
    }
    fetch("http://127.0.0.1:3000/google-signin", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((data) => {
        if(data.token){
            localStorage.setItem('token', data.token);
            window.location.href = "/dashboard.html";
        }
        else if(data.verified === false){
            window.location.href = "/verify-email.html";
        }
        else if(data.verified === true){
            window.location.href = "/dashboard.html";
        }
        else{
            alert("Error: "+ JSON.stringify(data));
        }
    });
}

