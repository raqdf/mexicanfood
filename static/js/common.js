const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("open");
  });
});

document.querySelector("#year").textContent = String(new Date().getFullYear());

const motionTargets = document.querySelectorAll(
  ".hero-copy, .hero-visual, .section-heading, .menu-card, .about-page .about-image, .about-page .about-copy, .values-grid article, .visit-copy, .visit-card, .contact-banner"
);

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

  motionTargets.forEach((element) => {
    element.classList.add("motion-reveal");
    revealObserver.observe(element);
  });
}
