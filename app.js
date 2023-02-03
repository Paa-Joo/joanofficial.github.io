// JavaScript for responsive design and interactivity

// Media query to adjust styles for different screen sizes
const mediaQuery = window.matchMedia("(max-width: 700px)");

// Function to apply styles based on screen size
function screenSizeChange(mediaQuery) {
  const header = document.querySelector("header");
  if (!header) return;

  const h1 = header.querySelector("h1");
  if (!h1) return;

  const nav = header.querySelector("nav");
  if (!nav) return;

  const links = nav.querySelectorAll("a");
  if (!links || !links.length) return;

  if (mediaQuery.matches) {
    // Styles for screens smaller than 700px
    h1.style.fontSize = "24px";
    nav.style.flexDirection = "column";
    links.forEach(link => {
      link.style.margin = "10px 0";
    });
  } else {
    // Styles for screens larger than 700px
    h1.style.fontSize = "36px";
    nav.style.flexDirection = "row";
    links.forEach(link => {
      link.style.margin = "0 20px";
    });
  }
}


// Call the function on page load
screenSizeChange(mediaQuery);

// Add a listener for screen size changes
mediaQuery.addListener(screenSizeChange);

// Interactivity for the contact form
const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("#contact-form button[type='submit']");

// Function to toggle form input styles on focus
function toggleFocus(event) {
  event.target.parentElement.classList.toggle("focused");
}

// Event listeners for form inputs
form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("focus", toggleFocus);
  input.addEventListener("blur", toggleFocus);
});

// Function to show form submit status
function showSubmitStatus(message) {
  const status = document.createElement("div");
  status.textContent = message;
  status.style.position = "fixed";
  status.style.top = "20px";
  status.style.right = "20px";
  status.style.backgroundColor = "#4CAF50";
  status.style.color = "#fff";
  status.style.padding = "10px 20px";
  status.style.borderRadius = "5px";
  status.style.boxShadow = "2px 2px 5px rgb(0, 0, 0)";
  document.body.appendChild(status);

  setTimeout(() => {
    status.style.opacity = "0";
  }, 5000);

  setTimeout(() => {
    status.remove();
  }, 5500);
}

// Event listener for form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitButton.style.pointerEvents = "none";
  submitButton.style.opacity = "0.5";

  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://example.com/submit-form");
  xhr.onload = () => {
    submitButton.style.pointerEvents = "";
    submitButton.style.opacity = "1";
    if (xhr.status === 200) {
        form.reset();
showSubmitStatus("Form submitted successfully!");
} else {
showSubmitStatus("An error occurred. Please try again later.");
}
};
xhr.send(data);
});

// Show/hide dropdown menu on small screens
const menuToggle = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
menu.classList.toggle("show");
});

// Change header background color on scroll
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
if (window.pageYOffset > headerHeight) {
header.classList.add("scrolled");
} else {
header.classList.remove("scrolled");
}
});

// Smooth scrolling to different sections of the page
const scrollLinks = document.querySelectorAll("nav a");

scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
const targetPosition = document.querySelector(targetId).offsetTop;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
let startTime = null;

function animation(currentTime) {
  if (startTime === null) startTime = currentTime;
  const timeElapsed = currentTime - startTime;
  const run = easeInOutQuad(timeElapsed, startPosition, distance, 600);
  window.scrollTo(0, run);
  if (timeElapsed < 600) requestAnimationFrame(animation);
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

requestAnimationFrame(animation);
});
});
     
