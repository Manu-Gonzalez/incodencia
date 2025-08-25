import catalogData from '../data/catalog.json' assert { type: 'json' };
import { initTilt } from './utils.js';

export function renderCatalog() {
  const container = document.getElementById('catalog-container');
  if (!container) return;

  container.innerHTML = ''; // Limpia por si rerender
  catalogData.systems.forEach(system => {
    const card = document.createElement('div');
    card.classList.add('tilt-card', 'bg-white', 'rounded-2xl', 'shadow-lg', 'overflow-hidden', 'p-6', 'hover:shadow-xl', 'transition');
    card.setAttribute('aria-label', system.title);
    card.innerHTML = `
      <img src="${system.icon}" alt="Ícono ${system.title}" class="w-20 mx-auto mb-4">
      <h4 class="text-xl font-semibold mb-2">${system.title}</h4>
      <p class="text-gray-600 mb-4">${system.description}</p>
      <a href="${system.demoUrl}" class="btn-gradient text-white px-4 py-2 rounded-lg demo-btn" data-system-id="${system.id}">Ver Demo</a>
    `;
    container.appendChild(card);
  });

  initTilt('.tilt-card'); // Reusa la animación tilt original
}