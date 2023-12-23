// google sign up
function onSignUp(credentials) {
    console.log(credentials);
    var profile = credentials.payload
    let fetchOptions = {
        headers : {
            'Content-Type' : "application/json"
        },
        method : 'POST',
        body : JSON.stringify({
            "firstName" : profile.given_name,
            "lastName" : profile.family_name,
            "defaultEmail" : profile.email,
            "password"  : profile.sub
        })
    }
    alert(fetchOptions.body);
    fetch("https://masterplanner.onrender.com/signup" , fetchOptions).then(()=>{
        alert("Account created successfully");
        window.location.href = "/verify-email.html"
    });
}

// google log in
