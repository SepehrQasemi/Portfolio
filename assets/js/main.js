(function () {
  const THEME_KEY = "portfolio_theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
  }

  function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.textContent = theme === "light" ? "Mode sombre" : "Mode clair";
  }

  function setActiveNavLink() {
    const path = (location.pathname.split("/").pop() || "private-material-removed").toLowerCase();
    document.querySelectorAll(".nav-links a").forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === path) a.classList.add("active");
      else a.classList.remove("active");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const initial = getInitialTheme();
    applyTheme(initial);
    setActiveNavLink();

    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.addEventListener("click", () => {
        const now = root.getAttribute("data-theme") === "light" ? "light" : "dark";
        setTheme(now === "light" ? "dark" : "light");
      });
      setTheme(initial);
    }
  });
})();