// js/changeLanguage.js
let translations = {};

async function loadTranslations() {
  const response = await fetch('../data/translations.json');
  translations = await response.json();
}

// Cambiar idioma
function changeLanguage(lang) {
  if (!translations[lang]) lang = "es";
  localStorage.setItem("language", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Inicialización
async function initLanguage() {
  await loadTranslations(); // Carga el JSON antes de inicializar
  const savedLang = localStorage.getItem("language") || "es";
  document.getElementById("language-select").value = savedLang;
  changeLanguage(savedLang);
  document.getElementById("language-select").addEventListener("change", (e) => {
    changeLanguage(e.target.value);
    alert(`Cambiando a idioma: ${e.target.value.toUpperCase()}`);
  });
}

export { initLanguage, changeLanguage };