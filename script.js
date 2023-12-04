function RedirectSingup(){
  window.location.href = 'sign.html';  
  }

  
  function StoreCredentials() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Write the username and password to the text file
    const fs = require('fs');
    const path = 'D:\\LetsMeet-master\\abc.txt';
    const data = `${username},${password}\n`;
    fs.appendFileSync(path, data);
  
    console.log('Credentials stored successfully.');
  }
  
  function ValidateCredentials() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Read the text file and check if the username and password match
    const fs = require('fs');
    const path = 'D:\\LetsMeet-master\\abc.txt';
    const fileData = fs.readFileSync(path, 'utf8');
    const credentials = fileData.split('\n');
  
    for (let i = 0; i < credentials.length; i++) {
      const [storedUsername, storedPassword] = credentials[i].split(',');
  
      if (username === storedUsername && password === storedPassword) {
        console.log('Login successful!');
        return true;
      }
    }
  
    console.log('Invalid username or password.');
    return false;
  }


  function Validatea() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    ValidateCredentials(username, password);


  }

// function to store the username and password in local storage
function storeUser() {

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // get the values from the input fields
  const username = usernameInput.value;
  const password = passwordInput.value;

  // get the existing users from local storage or initialize an empty object
  const users = JSON.parse(localStorage.getItem('users')) || {};

  if (users.hasOwnProperty(username)) {
    // show an error message to the user
    alert('User already exists');
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";   
    return;
  }

  if (!/[A-Z]/.test(password) || !/[\W]/.test(password)) {
    // show an error message to the user
    alert('Password must contain at least one uppercase letter and one special character');
    document.getElementById("password").value = "";
    return;
  }
  // store the new user in the object
  users[username] = password;

  // store the updated object in local storage
  localStorage.setItem('users', JSON.stringify(users));
  alert(username + ', Your singup was successfully!');
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";  
  window.location.href = 'login.html';
}

// function to handle the login
function login() {
  // get the input fields
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // get the values from the input fields
  const username = usernameInput.value;
  const password = passwordInput.value;

  // get the existing users from local storage or initialize an empty object
  const users = JSON.parse(localStorage.getItem('users')) || {};

  // check if the username and password match the stored values
  if (users.hasOwnProperty(username) && users[username] === password) {
    // redirect the user to the new page
    alert("Welcome to LetsMeet," + username );
    window.location.href = 'http://localhost:3000/';
  } else {
    // show an error message to the user
    alert('Invalid username or password');
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";  
  }
}
  function storeCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (localStorage.getItem("username") === username) {
        alert("Username already exists. Please choose a different username.");
        return;
    }
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one uppercase letter, one special character, one digit, and have a minimum length of 8 characters.");
    return;
    }
      
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    
    
    // Display a confirmation message
    alert("Credentials stored successfully!");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }  

  function validateCredentials() {
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username !== storedUsername || password !== storedPassword) {
        alert("Invalid username or password.");
        return;
    }

    
      // Display an alert with a successful login message
    alert("Welcome to LetsMeet," + username );

      // Clear the form values
     document.getElementById("username").value = "";
     document.getElementById("password").value = "";

      // Redirect to another webpage
    window.location.href = "http://localhost:3000/";
}
function logout() {
    window.location.href = "login.html";
     
      alert("Loged Out Sucessfuly");
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function () {
      window.history.go(1);
   
      // Redirect to another webpage
     
}
}

    
  
  
  
  
  
  