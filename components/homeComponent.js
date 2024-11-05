function homeComponent() {
  return `
    <h1>Home</h1><p>Welcome to the home page!</p>
    <button class="btn">Click me!</button>
    `;
}

// Add click event listener for button with class name ".btn"
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    alert("Button clicked!");
  }
});

export { homeComponent };
