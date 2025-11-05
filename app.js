const body = document.body;
const toggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("resonancia-theme") || "light";

if (currentTheme === "dark") {
  body.setAttribute("data-theme", "dark");
  toggleButton.textContent = "☀️";
}

toggleButton?.addEventListener("click", () => {
  const isDark = body.getAttribute("data-theme") === "dark";
  if (isDark) {
    body.removeAttribute("data-theme");
    localStorage.setItem("resonancia-theme", "light");
    toggleButton.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("resonancia-theme", "dark");
    toggleButton.textContent = "☀️";
  }
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    tabs.forEach((btn) => {
      const isActive = btn === tab;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const shouldShow = panel.id === targetId;
      panel.classList.toggle("hidden", !shouldShow);
      panel.setAttribute("aria-hidden", String(!shouldShow));
    });
  });
});

const form = document.querySelector(".cta-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("nombre");
  const role = formData.get("rol");

  const message = [
    `¡Gracias ${name || "por tu interés"}!`,
    "Nuestro equipo se pondrá en contacto en menos de 24 horas.",
    role ? `Enviaremos recursos personalizados para tu rol (${role}).` : null,
  ]
    .filter(Boolean)
    .join("\n");

  alert(message);
  form.reset();
});
