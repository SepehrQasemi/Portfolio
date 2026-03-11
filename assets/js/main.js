(function () {
  const THEME_KEY = "portfolio_theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return "light";
  }

  function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.textContent = theme === "light" ? "Dark mode" : "Light mode";
    }
  }

  function setActiveNavLink() {
    const pathname = location.pathname.toLowerCase();
    const leaf = (pathname.split("/").pop() || "index.html").toLowerCase();
    const target = pathname.includes("/assets/files/tp-hubspot/")
      ? "travaux.html"
      : leaf;

    document.querySelectorAll(".nav-links a").forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href.endsWith(target)) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initial = getInitialTheme();
    applyTheme(initial);
    setActiveNavLink();

    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.addEventListener("click", () => {
        const now = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        setTheme(now === "dark" ? "light" : "dark");
      });
      setTheme(initial);
    }
  });
})();
