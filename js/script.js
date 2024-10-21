// Function to detect if the element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Scroll event listener
window.addEventListener('scroll', function () {
  const images = document.querySelectorAll('.slide-in-image');
  images.forEach((image) => {
    if (isInViewport(image)) {
      image.classList.add('show');
    }
  });
});

// Scroll event listener to animate cards when they come into the viewport
window.addEventListener('scroll', function () {
  const cards = document.querySelectorAll('.custom-card');
  cards.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add('show');
    }
  });
});

// Trigger animation on load for any card already in the viewport
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.custom-card');
  cards.forEach((card) => {
    if (isInViewport(card)) {
      card.classList.add('show');
    }
  });
});

// Form submission
document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.querySelector("button[type='submit']"); // Select the submit button

  document
    .getElementById('signup')
    .addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      // Add loading spinner to button
      submitButton.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';
      submitButton.disabled = true; // Disable button while submitting

      const email = document.getElementById('email').value;

      // Send the form data using fetch
      fetch(
        'https://script.google.com/macros/s/AKfycbxNjC_1yVYWx8uN4zF8xrJm7-TIunpz3c_5D_wVGCCfZuciGaGyTBpOrGvZLH7-6dbY/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            email: email,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            title: 'Success!',
            text: data.message, // 'Sign up successful' or custom message from response
            icon: 'success',
            confirmButtonText: 'OK',
          });

          submitButton.innerHTML = 'Submit';
          submitButton.disabled = false;
        })
        .catch((error) => {
          console.error('Error:', error);
          // Show SweetAlert error popup
          Swal.fire({
            title: 'Error!',
            text: 'There was an issue with your submission. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });

          // Reset the button in case of error
          submitButton.innerHTML = 'Submit';
          submitButton.disabled = false;
        });
    });
});
