document.getElementById("year")?.append(String(new Date().getFullYear()));
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduced || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}
