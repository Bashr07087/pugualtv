function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple hardcoded check (replace with server-side validation in a real app)
    if (username === 'Obama' && password === 'Obama@123') {
        // Store a flag in localStorage to remember the user is logged in
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to the main page
    } else {
        errorMessage.style.display = 'block';
    }
}