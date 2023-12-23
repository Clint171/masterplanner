// google sign in
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    let fetchOptions = {
        headers : {
            'Content-Type' : "application/json"
        },
        method : 'POST',
        body : JSON.stringify({
            "firstName" : profile.getGivenName(),
            "lastName" : profile.getFamilyName(),
            "defaultEmail" : profile.getEmail(),
            "password"  : "google"
        })
    }
    alert(fetchOptions.body);
    fetch("https://masterplanner.onrender.com/signup" , fetchOptions).then(()=>{
        alert("Account created successfully");
        window.location.href = "/verify-email.html"
    });
}
