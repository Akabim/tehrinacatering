const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

function animateCounters() {
  const counters = document.querySelectorAll("#counter [data-count]");
  const options = {
    threshold: 0.5, // Adjust this threshold if needed
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const count = parseInt(target.dataset.count);
        const duration = 3000; // Adjust animation duration as needed
        let currentCount = 0;
        const steps = 50; // Adjust the number of steps for smoother animation

        const stepValue = Math.ceil(count / steps);
        const stepDuration = duration / steps;

        const counter = setInterval(() => {
          if (currentCount < count) {
            currentCount += stepValue;
            if (currentCount > count) currentCount = count; // Ensure final count is accurate
            target.textContent = currentCount;
          } else {
            target.textContent = count;
            clearInterval(counter);
          }
        }, stepDuration);
      }
    });
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
}

document.addEventListener("DOMContentLoaded", animateCounters);
