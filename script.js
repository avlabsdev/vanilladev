// Define your routes
const routes = {
  "/": () => {
    document.getElementById("content").innerHTML = `
    <h1>Home Page</h1>
    <p>Welcome to our home page</p>
    <button class="btn">Learn More</button>
    `;

    document.querySelector(".btn").addEventListener("click", () => {
      alert("Button clicked");
    });
  },
  "/about": () => {
    document.getElementById("content").innerHTML = `
    <h1>About Us</h1>
    <p>Learn more about us</p>
    `;
  },
  "/services": () => {
    document.getElementById("content").innerHTML = `
    <h1>Services</h1>
    <p>Discover our services</p>
    `;
  },
  "/contact": () => {
    document.getElementById("content").innerHTML = `
    <h1>Contact Us</h1>
    <p>Get in touch with us</p>
    `;
  },
};

// Handle navigation
function navigate(path) {
  if (routes[path]) {
    routes[path]();
    window.history.pushState({}, "", path);
  }
}

// Handle initial load and popstate (back/forward buttons)
function handleRoute() {
  const path = window.location.pathname;
  if (routes[path]) {
    routes[path]();
  }
}

window.addEventListener("popstate", handleRoute);
window.addEventListener("load", handleRoute);

// Add links for navigation (example)
document.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    navigate(path);
  }
});
