const wrapper = document.querySelector(".wrapper");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const btn = document.querySelector(".log-btn");
const iconClose = document.querySelector(".icon-close");

register.addEventListener("click", () => {
  wrapper.classList.add("active");
});

login.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btn.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

function loginn() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && email === storedUser.email && password === storedUser.password) {
      document.getElementById('message').textContent ="welcome, Login successful";
      document.getElementById('message').style.color = 'green';
  } else {
      document.getElementById('message').textContent = 'Invalid email or password!';
      document.getElementById('message').style.color = 'red';
  }
}

function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;

    if (name && email && password) {
        // Save user data in local storage
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        document.getElementById('messages').textContent = 'Signup successful! You can now login.';
        document.getElementById('messages').style.color = 'green';
    } else {
        document.getElementById('messages').textContent = 'Please fill out all fields!';
        document.getElementById('messages').style.color = 'red';
    }
}