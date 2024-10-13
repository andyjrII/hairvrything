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
