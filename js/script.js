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
