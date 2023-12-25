let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = form.email.value;
    let password = form.password.value;

    let data = {
        email: email,
        password: password
    };

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch('/login', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === 'ok') {
                localStorage.setItem('data', JSON.stringify(data));
                window.location.href = '/dashboard.html';
            } else {
                alert(data);
            }
        });
});