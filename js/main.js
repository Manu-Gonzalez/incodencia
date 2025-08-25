console.log("main.js cargado");
import { initAnimations } from './animations.js';
import { initLanguage, changeLanguage } from './changeLanguage.js';
import { initFormAnimations } from './formAnimations.js';
import { renderCatalog } from './catalog.js';
import { renderUseCases } from './useCases.js';
import { renderTestimonials } from './testimonials.js';
import { initDemoModals } from './demo.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded ejecutado");
  initLanguage();
  initAnimations();
  initFormAnimations();
  renderCatalog();
  renderUseCases();
  renderTestimonials();
  initDemoModals();
});