document.addEventListener('DOMContentLoaded', function() {
    const username = 'prathamesh'; // Replace with your username
    const password = 'Prathamesh@94'; // Replace with your password

    function authenticate() {
        const enteredUsername = prompt('Enter username:');
        const enteredPassword = prompt('Enter password:');
        
        if (enteredUsername === username && enteredPassword === password) {
            document.getElementById('protected-content').style.display = 'block';
            document.getElementById('login-form').style.display = 'none';
        } else {
            alert('Incorrect username or password');
            document.getElementById('login-form').style.display = 'block';
        }
    }
    // Show login form initially
    document.getElementById('protected-content').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    // Authenticate on page load
    authenticate();
});
