// google sign up
function onSignUp(credentials) {
    // handle cancellation
    if (credentials === null) {
        return;
    }
    alert(JSON.stringify(credentials));
    var profile = credentials.payload
    form.firstName.value = profile.given_name;
    form.lastName.value = profile.family_name;
    form.defaultEmail.value = profile.email;
    form.password.value = profile.sub;
    form.confirm.value = profile.sub;
}

// google log in
