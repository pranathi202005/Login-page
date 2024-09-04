// Sample user data
const users = [
    { username: 'admin', password: '123456' },
    { username: 'johndoe', password: 'password123' },
    { username: 'janedoe', password: 'securepass' },
  ];
  
  // Function to handle login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the username and password values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Verify the login credentials
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Login successful
    window.location.href='html.html'
          // You can redirect the user to the dashboard or perform other actions here
    } else {
      // Invalid login
      alert('Invalid username or password.');
    }
  });