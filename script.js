// Global variable
let globalCount = 0;

// Function with parameters & return value
function calculateArea(width, height) {
  return width * height;
}

// Function to trigger DOM change (animate box)
function animateBox(id, duration = 600) {
  const element = document.getElementById(id);
  element.classList.add("animate");

  // Remove the animation class after the given duration
  setTimeout(() => element.classList.remove("animate"), duration);
}

// Demonstrating scope
function incrementCounter() {
  let localCount = 1; // local scope
  globalCount += localCount;
  return globalCount;
}
