(function () {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = open
        ? '<i class="fa fa-times" aria-hidden="true"></i>'
        : '<i class="fa fa-bars" aria-hidden="true"></i>';
    });

    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
      });
    });
  }

  // Scroll progress bar
  const bar = document.querySelector(".scroll-progress");
  const updateProgress = () => {
    if (!bar) return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const pct = scrollHeight ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = pct.toFixed(2) + "%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
})();
