document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("mainNav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("carouselDots");
  let current = 0;
  let timer;

  if (slides.length && dotsContainer) {
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "dot" + (index === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => showSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
      dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    }

    document.querySelector(".next")?.addEventListener("click", () => showSlide(current + 1));
    document.querySelector(".prev")?.addEventListener("click", () => showSlide(current - 1));

    const start = () => timer = setInterval(() => showSlide(current + 1), 4500);
    start();
    document.getElementById("heroCarousel")?.addEventListener("mouseenter", () => clearInterval(timer));
    document.getElementById("heroCarousel")?.addEventListener("mouseleave", start);
  }
});
