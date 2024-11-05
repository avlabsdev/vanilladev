// Define your routes
const routes = {
  "/vanilladev/": () => {
    document.getElementById("content").innerHTML = "<h1>Home Page</h1>";
  },
  "/vanilladev/about": () => {
    document.getElementById("content").innerHTML = "<h1>About Us</h1>";
  },
  "/vanilladev/services": () => {
    document.getElementById("content").innerHTML = "<h1>Services</h1>";
  },
  "/vanilladev/contact": () => {
    document.getElementById("content").innerHTML = "<h1>Contact Us</h1>";
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
