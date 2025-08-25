import useCasesData from '../data/useCases.json' assert { type: 'json' };

export function renderUseCases() {
  const container = document.getElementById('use-cases-container');
  const tableContainer = document.getElementById('comparison-table');
  if (!container || !tableContainer) return;

  container.innerHTML = '';
  useCasesData.cases.forEach(caseItem => {
    if (caseItem.sectors) {
      const div = document.createElement('div');
      div.classList.add('bg-white', 'rounded-2xl', 'shadow-lg', 'p-6');
      div.innerHTML = `
        <h4 class="text-xl font-semibold mb-4">${caseItem.system}</h4>
        <ul class="text-gray-600 list-disc pl-5">
          ${caseItem.sectors.map(sector => `<li>${sector}</li>`).join('')}
        </ul>
      `;
      container.appendChild(div);
    }
  });

  const comparison = useCasesData.cases.find(c => c.adaptations);
  if (comparison) {
    let tableHTML = '<table class="mx-auto border-collapse border border-gray-300"><thead><tr><th class="border p-4">Sistema Genérico</th><th class="border p-4">Negocio X</th><th class="border p-4">Negocio Y</th><th class="border p-4">Negocio Z</th></tr></thead><tbody>';
    comparison.adaptations.forEach(adapt => {
      tableHTML += `<tr><td class="border p-4">${adapt.generic}</td><td class="border p-4">${adapt.x}</td><td class="border p-4">${adapt.y}</td><td class="border p-4">${adapt.z}</td></tr>`;
    });
    tableHTML += '</tbody></table>';
    tableContainer.innerHTML = tableHTML;
  }
}