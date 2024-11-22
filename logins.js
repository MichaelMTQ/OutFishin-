/**
 * Opens the modal and displays the appropriate form (login or signup).
 * @param {string} type - Specifies the type of form to show ('login' or 'signup').
 */

console.log("logins.js is loaded");

function openModal(type) {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    // Show the modal
    modal.classList.remove('hidden');
  
    // Toggle between login and signup forms
    if (type === 'login') {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    } else if (type === 'signup') {
      signupForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    }
  }
  
  /**
   * Closes the modal and hides all forms.
   */
  function closeModal() {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    // Hide modal and reset forms
    modal.classList.add('hidden');
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
  }
  
  /**
   * Closes the modal when clicking outside the modal content.
   */
  document.addEventListener('click', (event) => {
    const modal = document.getElementById('authModal');
    const modalContent = document.querySelector('.modal-content');
  
    // Check if the modal is visible and the click is outside the content
    if (!modal.classList.contains('hidden') && !modalContent.contains(event.target)) {
      closeModal();
    }
  });
  
  /**
   * Closes the modal when pressing the ESC key.
   */
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  
  /**
   * Prevents form submission from refreshing the page (example behavior).
   */
  document.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    alert('Form submitted!');
    closeModal(); // Close the modal after submission
  });
  