import testimonialsData from '../data/testimonials.json' assert { type: 'json' };

export function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = '';
  testimonialsData.testimonials.forEach(test => {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'rounded-2xl', 'shadow-lg', 'p-6');
    card.innerHTML = `
      <p class="text-gray-600 mb-4">"${test.quote}"</p>
      <p class="font-semibold">${test.author}</p>
      <p class="text-sm text-gray-500">${test.company}</p>
    `;
    container.appendChild(card);
  });
}