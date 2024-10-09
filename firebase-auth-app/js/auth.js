// auth.js

// Register new user
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
  
    firebase.auth().createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registration successful
        const user = userCredential.user;
        document.getElementById('authStatus').innerText = `Registered successfully as ${user.email}`;
      })
      .catch((error) => {
        document.getElementById('authStatus').innerText = `Error: ${error.message}`;
      });
  });
  
  // Login user
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    firebase.auth().signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User logged in successfully
        const user = userCredential.user;
        document.getElementById('authStatus').innerText = `Logged in successfully as ${user.email}`;
      })
      .catch((error) => {
        document.getElementById('authStatus').innerText = `Error: ${error.message}`;
      });
  });
  
  // Sign out user
  document.getElementById('signOutButton').addEventListener('click', function() {
    firebase.auth().signOut(auth)
      .then(() => {
        document.getElementById('authStatus').innerText = 'Signed out successfully';
      })
      .catch((error) => {
        document.getElementById('authStatus').innerText = `Error: ${error.message}`;
      });
  });
  
  // Listen to auth state changes
  firebase.auth().onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById('authStatus').innerText = `Logged in as ${user.email}`;
    } else {
      document.getElementById('authStatus').innerText = 'No user logged in';
    }
  });
  