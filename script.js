// script.js
import { homeComponent } from "./components/homeComponent.js";
import { aboutComponent } from "./components/aboutComponent.js";
import { servicesComponent } from "./components/servicesComponent.js";
import { contactComponent } from "./components/contactComponent.js";

// Define your routes and their corresponding components
const routes = {
  "/": homeComponent,
  "/about": aboutComponent,
  "/services": servicesComponent,
  "/contact": contactComponent,
};

// Function to handle routing
function router() {
  const path = window.location.pathname;
  const component = routes[path] || notFoundComponent;
  document.getElementById("app").innerHTML = component();
}

// Define a not found component
function notFoundComponent() {
  return `<h1>404</h1><p>Page not found</p>`;
}

// Listen for navigation events
window.addEventListener("popstate", router);

// Handle link clicks
document.addEventListener("click", (event) => {
  if (
    event.target.tagName === "A" &&
    event.target.href.startsWith(window.location.origin)
  ) {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    router();
  }
});

// Initial call to router to render the initial route
router();
