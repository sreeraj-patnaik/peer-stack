document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("[data-navbar]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinksWrapper = document.querySelector("[data-nav-links]");

  if (navbar && navToggle && navLinksWrapper) {
    navToggle.addEventListener("click", () => {
      const isOpen = navbar.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinksWrapper.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (!navbar.contains(event.target)) {
        navbar.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Highlight current navigation item by page key.
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll(`.nav-link[data-nav="${page}"]`).forEach((item) => {
      item.classList.add("is-active");
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Lightweight client-side filtering for skill search cards.
  const skillInput = document.querySelector("#skillSearch");
  if (skillInput) {
    const cards = Array.from(document.querySelectorAll("[data-skill-card]"));
    skillInput.addEventListener("input", (event) => {
      const query = event.target.value.trim().toLowerCase();
      cards.forEach((card) => {
        const haystack = card.dataset.search || "";
        card.style.display = haystack.includes(query) ? "" : "none";
      });
    });
  }

  // Mark notifications as read on click for a simple interaction.
  document.querySelectorAll(".notification-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.remove("unread");
    });
  });
});
