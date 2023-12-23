let form = document.querySelector('form');

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    let password = form.password.value;
    let confirmPassword = form.confirm.value;
    if (password === confirmPassword){
        let fetchOptions = {
            headers : {
                'Content-Type' : "application/json"
            },
            method : 'POST',
            body : JSON.stringify({
                "firstName" : form.firstName.value,
                "lastName" : form.lastName.value,
                "defaultEmail" : form.defaultEmail.value,
                "password"  : form.password.value
            })
        }
        fetch("https://masterplanner.onrender.com/signup" , fetchOptions).then(()=>{
            alert("Account created successfully");
            window.location.href = "/verify-email.html"
        });
    }
    else{
        alert("Password and confirmation do not match!");
    }
});

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
