function openModal() {
  document.getElementById("contactModal").classList.add("open");
}
function closeModal() {
  document.getElementById("contactModal").classList.remove("open");
}
document.getElementById("contactModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});
function copyEmail() {
  navigator.clipboard
    .writeText("greenbeacons.2025@gmail.com")
    .then(() => alert("Email copied!"))
    .catch(() => prompt("Copy this:", "greenbeacons.2025@gmail.com"));
}
// Intersection observer for fade-up on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting)
        e.target.style.animation = "fadeUp .7s ease forwards";
    });
  },
  { threshold: 0.1 }
);
document
  .querySelectorAll(".pillar,.proof-item,.price-card,.kpa,.not-item")
  .forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });
