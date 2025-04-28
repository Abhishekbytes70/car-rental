function toggleForm() {
  const signupForm = document.getElementById('signup-form');
  const signinForm = document.getElementById('signin-form');
  const formTitle = document.getElementById('form-title');
  const toggleText = document.getElementById('toggle-text');

  if (signupForm.style.display === "none") {
    signupForm.style.display = "block";
    signinForm.style.display = "none";
    formTitle.innerText = "Create an account";
    toggleText.innerHTML = `Already have an account? <a href="#" onclick="toggleForm()">Sign In</a>`;
  } else {
    signupForm.style.display = "none";
    signinForm.style.display = "block";
    formTitle.innerText = "Sign In";
    toggleText.innerHTML = `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`;
  }
}
