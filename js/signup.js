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
        fetch("http://127.0.0.1:3000/signup" , fetchOptions).then(()=>{
            alert("Account created successfully");
            window.location.href = "/verify-email.html"
        });
    }
    else{
        alert("Password and confirmation do not match!");
    }
});